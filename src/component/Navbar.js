import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () =>{
  return (
    <>
      <section className='nav'>
        <div className='container'>
            <h1>LOGO</h1>
            <ul>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/menu'>Menu</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/catelogs'>Catelogs</Link></li>
                <li><Link to='/arrivals'>Arrivals</Link></li>
                <li><Link to='/phone'>Contact</Link></li>
                <li><Link to='/all products'>Orders</Link></li>
            </ul>
        </div>
      </section>
      <br></br>
      <hr></hr>

    </>
  )
}

export default Navbar