import Rive from '@rive-app/react-webgl2'
import './App.css'
import hologramRiv from './assets/hologram.riv?url'

function App() {

  return (
    <div className='flex flex-col items-center'>
      <Rive
      className='hero-rive'
        src={hologramRiv}
        stateMachines="Play"
      />
      <h1>Hello there explorer.</h1>
      <p>My name is Karl, I do product design and web development. On my journey, I've led design process for user-centric products and design systems.</p>
      <p>(Been designing for two <a href="https://www.lift99.co/walloffame" target="_blank" rel="noopener noreferrer">#EstonianMafia</a> startups.)</p>
      <div>
        <button>Check out my work</button>
        <button>Read my CV</button>
      </div>
    </div>
  )
}

export default App
