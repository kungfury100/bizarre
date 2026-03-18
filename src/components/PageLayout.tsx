import { useEffect, useRef, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import Background from './Background'
import Logo from './Logo'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

type PageLayoutProps = {
  children: ReactNode
}

function PageLayout({ children }: PageLayoutProps) {
  const location = useLocation()
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const contentClassName = location.pathname === '/'
    ? 'app-content app-content--home'
    : 'app-content'

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0, left: 0 })
  }, [location.pathname])

  return (
    <div>
      <div className='app-frame'>
        <Background />
        <div className='logo-frame'>
          <Link to="/">
            <Logo className='logo-icon' />
          </Link>
        </div>
        <div ref={scrollRef} className='app-scroll'>
          <div className={contentClassName}>
            {children}
          </div>
        </div>
        <Navbar />
      </div>
    </div>
    
  )
}

export default PageLayout
