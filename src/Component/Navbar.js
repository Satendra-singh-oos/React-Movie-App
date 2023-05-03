import React from 'react'
import { useGlobalContext } from '../ContextApi/context'
import logo from "./img/logo-2.png"
const Navbar = () => {
  const {query,setQuery,isError}=useGlobalContext()

  
  return (
  
  <div className='navbar'>
    <div>
    <img className="logo" src={logo} alt='movie-app-logo'/>
    </div>
    {/* // search and imageof navbar should be here */}
    <section className="search-section">
      {/* <h2>Search Movie here...</h2> */}
      <form action='#' onSubmit={(e)=>e.preventDefault()}>
        <div>
          <input 
          type='text' 
          placeholder='Search Movie Here..' 
          // value={query}
          onChange={(e)=>setQuery(e.target.value)}/>
        </div>
      </form>

      <div className='card-error'>
        <p>{isError.show && isError.msg}</p>
      </div>
    </section>
    
  </div>
  
  )
}

export default Navbar