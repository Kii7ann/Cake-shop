import React from 'react'
import './index.css'
import { Link, NavLink, Route, Routes } from 'react-router'
import Home from './Components/Home'
import About from './Components/About'
import Cakes from './Components/Cakes'
import Contact from './Components/Contact'
import Cart from './Components/Cart'

const App = () => {
  return (
    <>
      {/* header */}
      <header>
        <div className='d-flex justify-content-center mt-3'><NavLink to='/'><img src="https://websitedemos.net/cake-shop-04/wp-content/uploads/sites/537/2020/01/logo-retina-free-img.png" width={200} /></NavLink></div>
        {/* navbar */}
        <nav className='navbar navbar-expand-lg'>
          <div className='container d-flex justify-content-center flex-wrap'>
            <ul className='navbar-nav mb-2 mb-lg-0 d-flex flex-wrap gap-3 justify-content-center'>
              <li className='nav-item'><Link to='/' className='navlcolor'>Home</Link></li>
              <li className='nav-item'><Link to='/about' className='navlcolor'>About</Link></li>
              <li className='nav-item'><Link to='/cakes' className='navlcolor'>cakes</Link></li>
              <li className='nav-item'><Link to='/contect' className='navlcolor'>Contact</Link></li>
              <li className='nav-item'><Link to='/cart' className='navlcolor'><i className="fa-solid fa-cart-shopping"></i></Link></li>
            </ul>
          </div>
        </nav>
      </header>

      {/* components */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/cakes' element={<Cakes />} />
        <Route path='/contect' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>

      {/* footer */}
      <footer className="py-5">
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start">
            <div className="mb-4 mb-md-0">
              <img
                src="https://websitedemos.net/cake-shop-04/wp-content/uploads/sites/537/2020/01/logo-retina-free-img-300x132.png"
                className="img-fluid mb-3"
                style={{ maxWidth: 200 }}
              />
              <p className="ftext">Something Sweet for Everyone.</p>
              <p className="ftext2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, similique?
              </p>
            </div>
            <div>
              <p className="ftext3">+91-96******52</p>
              <p className="ftext2">order@example.com</p>
              <p className="ftext4">Lorem ipsum dolor sit amet.</p>
              <div className="d-flex gap-3 mt-2 flex-wrap">
                <Link to=""><i className="fa-brands fa-facebook lcolor"></i></Link>
                <Link to=""><i className="fa-brands fa-youtube lcolor"></i></Link>
                <Link to=""><i className="fa-brands fa-instagram lcolor"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
