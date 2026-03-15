import Rive from '@rive-app/react-webgl2'
import hologramRiv from '../assets/hologram.riv?url'
import useGlobalRivePointer from '../hooks/useGlobalRivePointer'
import { useRef } from 'react'
import { Link } from 'react-router-dom'


function Home() {
  const riveHostRef = useRef<HTMLDivElement | null>(null)
  useGlobalRivePointer(riveHostRef)

  return (
    <div className='page-stack items-center py-16'>
      <div ref={riveHostRef} className='hero-rive'>
        <Rive
          className='hero-rive-inner'
          src={hologramRiv}
          stateMachines='Play'
        />
      </div>

      <div className='page-stack'>
        <div className='page-stack--tight'>
          <h1>Hello there explorer.</h1>
          <p>My name is Karl, I do product design and web development. On my journey, I've led design process for user-centric products and design systems.</p>
          <p>(Been designing for two <a href='https://www.lift99.co/walloffame' target='_blank' rel='noopener noreferrer'>#EstonianMafia</a> startups.)</p>
        </div>

        <div className='button-row'>
          <Link to='/work' className='button-link'>Check out my work</Link>
          <Link to='/contact' className='button-link'>Read my CV</Link>
        </div>
      </div>
    </div>
  )
}

export default Home