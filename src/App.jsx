import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Signup from './components/Signup'
import Signin from './components/Signin'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Create from './components/Create'
import ViewMyPost from './components/ViewMyPost'
import ViewAll from './components/ViewAll'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Signup/>
     <Signin/> */}
  <BrowserRouter>
  <Routes>
  
    <Route path="/" element={<Signin/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/create" element={<Create/>}/>
    <Route path="/viewall" element={<ViewAll/>}/>
        <Route path="/viewmypost" element={<ViewMyPost />} />
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App;
