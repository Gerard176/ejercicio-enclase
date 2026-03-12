import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import HomeHooks from '../playground/HomeHooks'
import HooksUseState from '../playground/HookUseState'
import HooksUseNavigate from '../playground/HooksUseNavigate'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeHooks />} />
        <Route path="/usestate" element={<HooksUseState />} />
        <Route path="/usenavigate" element={<HooksUseNavigate />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
