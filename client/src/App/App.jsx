import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Gallery } from '../Pages/Gallery/Gallery'
import {Upload} from "../Pages/Upload/Upload"
import Home from '../Pages/Home/Home';
import NavBar from '../Components/Navbar/NavBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/upload' element={<Upload />} />
          <Route path='/gallery' element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
