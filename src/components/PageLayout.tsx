import type { ReactNode } from 'react'
import Background from './Background'
import Logo from './Logo'
import Navbar from './Navbar'

type PageLayoutProps = {
  children: ReactNode
}

function PageLayout({ children }: PageLayoutProps) {
  return (
    <div>
      <div className='app-frame'>
        <Background />
        <div className='logo-frame'>
          <Logo className='logo-icon' />
        </div>
        <div className='app-content'>
          {children}
        </div>
        <Navbar />
      </div>
    </div>
    
  )
}

export default PageLayout
