import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import { navData } from '../../data/Data'
import './header.css'
function Header() {
  return (
    <header>
        <div className="container">
        <div className="S-flex">
            <img src={logo} alt="" />
            <div className="search flex">
            <i className='fa fa-search'></i>
            <input type="text" placeholder='Search and hit enter' />
            <label htmlFor="">Category</label>
            </div>
            <div className="icons">
            <i className='fa fa-user icon-circle'></i>
            <i className='fa fa-shopping-bag icon-circle'></i>
            </div>
        </div>

        <nav className='S-flex'>
            <div className="category_items flex">
               <i className='fa-solid fa-border-all'></i>
               <h4>
                  Categories <i className='fa fa-chevron-down'></i>
               </h4>
            </div>
            <ul className='flex'>
                {navData.map((item,idx)=>(
                    <li key={idx}>
                        <Link to={item.path}>{item.link}</Link>
                    </li>
                ))}
            </ul>

        </nav>
        </div>
    </header>
  )
}

export default Header