import { useMemo, useRef, useState, type CSSProperties } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import barsIcon from '../assets/bars.svg'
import cameraIcon from '../assets/camera.svg'
import figmaIcon from '../assets/figma.svg'
import githubIcon from '../assets/github.svg'
import houseIcon from '../assets/house.svg'
import './Navbar.css'

type NavItem = {
	id: string
	type: 'internal' | 'external'
	to: string
	label: string
	icon: string
}

const navItems: NavItem[] = [
	{ id: 'home', type: 'internal', to: '/', label: 'Home', icon: houseIcon },
  { id: 'photos', type: 'internal', to: '/photos', label: 'Photos', icon: cameraIcon },
	{ id: 'figma', type: 'external', to: 'https://www.figma.com/@kungfury', label: 'Figma', icon: figmaIcon },
	{ id: 'github', type: 'external', to: 'https://github.com/kungfury100', label: 'GitHub', icon: githubIcon },
]

function isRouteActive(pathname: string, to: string) {
	if (to === '/') {
		return pathname === '/'
	}

	return pathname === to || pathname.startsWith(`${to}/`)
}

function Navbar() {
	const location = useLocation()
	const containerRef = useRef<HTMLDivElement | null>(null)
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
	const [isExpanded, setIsExpanded] = useState(false)

	const activeIndex = useMemo(
		() => navItems.findIndex((item) => isRouteActive(location.pathname, item.to)),
		[location.pathname],
	)

	const highlightedIndex = hoveredIndex ?? activeIndex
	const menuStyle = {
		'--floating-nav-item-count': navItems.length,
		'--hover-position': highlightedIndex >= 0 ? highlightedIndex : 0,
	} as CSSProperties

	const handleMouseLeave = () => {
		setIsExpanded(false)
		setHoveredIndex(null)

		const activeElement = document.activeElement

		if (activeElement instanceof HTMLElement && containerRef.current?.contains(activeElement)) {
			activeElement.blur()
		}
	}

	return (
		<nav className='floating-nav' aria-label='Primary'>
			<div
				ref={containerRef}
				className={`floating-nav-container${isExpanded ? ' is-expanded' : ''}`}
				style={menuStyle}
				onMouseEnter={() => setIsExpanded(true)}
				onMouseLeave={handleMouseLeave}
			>
				<button
					type='button'
					className='floating-nav-toggle'
					aria-label='Toggle navigation'
					aria-expanded={isExpanded}
					onClick={() => setIsExpanded((current) => !current)}
				>
					<img src={barsIcon} className='floating-nav-icon' alt='' aria-hidden='true' />
				</button>

				<div
					className='floating-nav-menu-items'
					data-hover={highlightedIndex >= 0 ? 'true' : undefined}
					onMouseLeave={() => setHoveredIndex(null)}
				>
					{navItems.map(({ id, type, to, label, icon }, index) => {
						const sharedProps = {
							className: ['floating-nav-item', hoveredIndex === index ? 'is-hovered' : ''].filter(Boolean).join(' '),
							'aria-label': label,
							onMouseEnter: () => setHoveredIndex(index),
							onFocus: () => {
								setIsExpanded(true)
								setHoveredIndex(index)
							},
							onBlur: () => setHoveredIndex(null),
							onClick: () => {
								setIsExpanded(false)
								setHoveredIndex(null)
							},
						}

						if (type === 'external') {
							return (
								<a
									key={id}
									href={to}
									target='_blank'
									rel='noopener noreferrer'
									{...sharedProps}
								>
									<img src={icon} className='floating-nav-icon' alt='' aria-hidden='true' />
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

									if (isActive && hoveredIndex === null) {
										classNames.push('is-active')
									}

									return classNames.filter(Boolean).join(' ')
								}}
								aria-label={sharedProps['aria-label']}
								onMouseEnter={sharedProps.onMouseEnter}
								onFocus={sharedProps.onFocus}
								onBlur={sharedProps.onBlur}
								onClick={sharedProps.onClick}
							>
								<img src={icon} className='floating-nav-icon' alt='' aria-hidden='true' />
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
