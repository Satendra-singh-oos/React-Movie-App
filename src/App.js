import React, { useState } from 'react'
import './App.css'
import HomePage from './Component/HomePage'
import { Route, Routes } from 'react-router-dom'
import SingleMovie from './Component/SingleMovie'
import Error from './utils/Error'


const App = () => {
  return (
   
    <Routes>
   
   <Route path="/" element={<HomePage/>}/>
   <Route path="/movie/:id"  element={<SingleMovie/>}/>
   <Route path="*" element={<Error/>}/>

    </Routes>
  
  )
}

export default App
