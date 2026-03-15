import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import PageLayout from './components/PageLayout'
import Home from './pages/home'
import Photos from './pages/Photos'



function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/photos' element={<Photos />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </PageLayout>
  )
}

export default App
