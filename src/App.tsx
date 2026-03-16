import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import PageLayout from './components/PageLayout'
import Home from './pages/Home'
import Photos from './pages/Photos'
import Moon from './pages/docs/Moon'
import Fudy from './pages/docs/Fudy'



function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/photos' element={<Photos />} />
        <Route path='/docs/moon' element={<Moon />} />
        <Route path='/docs/fudy' element={<Fudy />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </PageLayout>
  )
}

export default App
