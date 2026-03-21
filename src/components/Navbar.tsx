import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react'
import { Camera, Figma, Github, Home, Menu, type LucideIcon } from 'lucide-react'
import { NavLink, useLocation } from 'react-router-dom'
import '../styles/Navbar.css'

type NavItem = {
	id: string
	type: 'internal' | 'external'
	to: string
	label: string
	icon: LucideIcon
}

const navItems: NavItem[] = [
	{ id: 'home', type: 'internal', to: '/', label: 'Home', icon: Home },
	{ id: 'photos', type: 'internal', to: '/shots', label: 'Photos', icon: Camera },
	{ id: 'figma', type: 'external', to: 'https://www.figma.com/@kungfury', label: 'Figma', icon: Figma },
	{ id: 'github', type: 'external', to: 'https://github.com/kungfury100', label: 'GitHub', icon: Github },
]

function isRouteActive(pathname: string, to: string) {
	if (to === '/') {
		return pathname === '/'
	}

	return pathname === to || pathname.startsWith(`${to}/`)
}

function Navbar() {
	const location = useLocation()
	const [navElement, setNavElement] = useState<HTMLDivElement | null>(null)
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
	const [isExpanded, setIsExpanded] = useState(false)
	const [isInteractionReady, setIsInteractionReady] = useState(false)
	const openInteractionTimeoutRef = useRef<number | null>(null)
	const [isMobile, setIsMobile] = useState(() => {
		if (typeof window === 'undefined') {
			return false
		}

		return window.matchMedia('(max-width: 640px)').matches
	})

	useEffect(() => {
		const mediaQuery = window.matchMedia('(max-width: 640px)')

		const handleChange = (event: MediaQueryListEvent) => {
			setIsMobile(event.matches)
			setIsExpanded(false)
			setIsInteractionReady(false)
			setHoveredIndex(null)
		}

		mediaQuery.addEventListener('change', handleChange)

		return () => {
			if (openInteractionTimeoutRef.current !== null) {
				window.clearTimeout(openInteractionTimeoutRef.current)
			}

			mediaQuery.removeEventListener('change', handleChange)
		}
	}, [])

	useEffect(() => {
		if (openInteractionTimeoutRef.current !== null) {
			window.clearTimeout(openInteractionTimeoutRef.current)
			openInteractionTimeoutRef.current = null
		}

		if (!isMobile) {
			setIsInteractionReady(true)
			return
		}

		if (!isExpanded) {
			setIsInteractionReady(false)
			return
		}

		setIsInteractionReady(false)
		openInteractionTimeoutRef.current = window.setTimeout(() => {
			setIsInteractionReady(true)
			openInteractionTimeoutRef.current = null
		}, 220)

		return () => {
			if (openInteractionTimeoutRef.current !== null) {
				window.clearTimeout(openInteractionTimeoutRef.current)
				openInteractionTimeoutRef.current = null
			}
		}
	}, [isExpanded, isMobile])

	useEffect(() => {
		if (navElement && document.activeElement instanceof HTMLElement && navElement.contains(document.activeElement)) {
			document.activeElement.blur()
		}

		const frame = window.requestAnimationFrame(() => {
			if (!navElement || isMobile) {
				setHoveredIndex(null)
				setIsExpanded(false)
				setIsInteractionReady(false)
				return
			}

			const hoveredItem = navElement.querySelector<HTMLElement>('.floating-nav-item:hover')

			if (hoveredItem) {
				const nextHoveredIndex = Number(hoveredItem.dataset.navIndex)
				setHoveredIndex(Number.isNaN(nextHoveredIndex) ? null : nextHoveredIndex)
				setIsExpanded(true)
				return
			}

			setHoveredIndex(null)
			setIsExpanded(navElement.matches(':hover'))
		})

		return () => {
			window.cancelAnimationFrame(frame)
		}
	}, [isMobile, location.pathname, navElement])

	const activeIndex = useMemo(
		() => navItems.findIndex((item) => isRouteActive(location.pathname, item.to)),
		[location.pathname],
	)

	const highlightedIndex = (isMobile ? (hoveredIndex ?? activeIndex) : hoveredIndex) ?? -1
	const menuStyle = {
		'--floating-nav-item-count': navItems.length,
		'--hover-position': highlightedIndex >= 0 ? highlightedIndex : 0,
	} as CSSProperties

	return (
		<nav className='floating-nav' aria-label='Primary'>
			<div
				ref={setNavElement}
				className={`floating-nav-container${isExpanded ? ' is-expanded' : ''}${isInteractionReady ? ' is-interaction-ready' : ''}`}
				style={menuStyle}
				onMouseEnter={() => {
					setIsExpanded(true)
					setIsInteractionReady(true)
				}}
				onMouseLeave={() => {
					setHoveredIndex(null)
					setIsExpanded(false)
					setIsInteractionReady(false)
				}}
			>
				<button
					type='button'
					className='floating-nav-toggle'
					aria-label='Toggle navigation'
					aria-expanded={isExpanded}
					onClick={() => {
						setHoveredIndex(null)
						setIsExpanded((current) => !current)
					}}
				>
					<Menu className='floating-nav-icon' aria-hidden='true' strokeWidth={1.75} />
				</button>

				<div
					className='floating-nav-menu-items'
					data-hover={highlightedIndex >= 0 ? 'true' : undefined}
					onMouseLeave={() => setHoveredIndex(null)}
				>
					{navItems.map(({ id, type, to, label, icon: Icon }, index) => {
						const handleEnter = () => {
							if (isMobile && !isInteractionReady) {
								return
							}

							setHoveredIndex(index)
							setIsExpanded(true)
						}

						const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
							if (isMobile && !isInteractionReady) {
								event.preventDefault()
								event.stopPropagation()
								return
							}

							if (isMobile) {
								setHoveredIndex(null)
								setIsExpanded(false)
								setIsInteractionReady(false)
							}
						}

						const sharedProps = {
							className: ['floating-nav-item', hoveredIndex === index ? 'is-hovered' : ''].filter(Boolean).join(' '),
							'aria-label': label,
							onMouseEnter: handleEnter,
							onFocus: handleEnter,
							onBlur: () => setHoveredIndex(null),
							onClick: handleClick,
						}

						if (type === 'external') {
							return (
								<a
									key={id}
									href={to}
									target='_blank'
									rel='noopener noreferrer'
									data-nav-index={index}
									{...sharedProps}
								>
									<Icon className='floating-nav-icon' aria-hidden='true' strokeWidth={1.75} />
									<span className='floating-nav-item-label'>{label}</span>
								</a>
							)
						}

						return (
							<NavLink
								key={id}
								to={to}
								className={({ isActive }) => {
									const classNames = [...sharedProps.className.split(' ')]

									if (isMobile && isActive && hoveredIndex === null) {
										classNames.push('is-active')
									}

									return classNames.filter(Boolean).join(' ')
								}}
								data-nav-index={index}
								aria-label={sharedProps['aria-label']}
								onMouseEnter={sharedProps.onMouseEnter}
								onFocus={sharedProps.onFocus}
								onBlur={sharedProps.onBlur}
								onClick={sharedProps.onClick}
							>
								<Icon className='floating-nav-icon' aria-hidden='true' strokeWidth={1.75} />
								<span className='floating-nav-item-label'>{label}</span>
							</NavLink>
						)
					})}
				</div>
			</div>
		</nav>
	)
}

export default Navbar
