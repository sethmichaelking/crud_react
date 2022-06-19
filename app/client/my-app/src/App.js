import React, { useEffect, useState } from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import axios from 'axios'
function App() {
  
  return (
    <div>
        <div>
          <Navbar />
          <Home/>
        </div>
      </div>
  )
}

export default App