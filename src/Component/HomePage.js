import React from 'react'
import Movies from './Movies'
import Navbar from './Navbar'

const HomePage = () => {


  return (
    <>

      {/* <h1>HomePage</h1> */}
      <div className="container">
      <Navbar/>
     <Movies/>
     </div>

    </>
  )
}

export default HomePage