import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Samp01 from './samples/01/sample01'
import './App.css'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <div className='wrap'>
        <h1>Hello Vite+React+JavaScript</h1>
        <a href="/test">
          Sample01
          <Routes>
            <Route path="/test" element={<Samp01 />} />
          </Routes>
        </a>
      </div>
    </>
  )
}

export default App
