import type { ReactNode } from 'react'
import Background from './Background'
import Logo from './Logo'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

type PageLayoutProps = {
  children: ReactNode
}

function PageLayout({ children }: PageLayoutProps) {
  return (
    <div>
      <div className='app-frame'>
        <Background />
        <div className='logo-frame'>
          <Link to="/">
            <Logo className='logo-icon' />
          </Link>
        </div>
        <div className='app-scroll'>
          <div className='app-content'>
            {children}
          </div>
        </div>
        <Navbar />
      </div>
    </div>
    
  )
}

export default PageLayout
