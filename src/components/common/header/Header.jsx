import axios from 'axios'
import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import swal from 'sweetalert'
import logo from '../../assets/images/logo.svg'
import { navData } from '../../data/Data'
import './header.css'
function Header() {

    const history=useHistory()

    const Logout=(e)=>{
        e.preventDefault()
        axios.post('api/logout').then(res=>{
            if(res.data.status===200)
            {
                localStorage.removeItem('auth_token')
                localStorage.removeItem('auth_username')

                swal('success',res.data.message)
                history.push('/')
            }
        })
    }

    var AuthButton=''

    if(!localStorage.getItem('auth_token'))
    {
        AuthButton=(
            <ul className='flex'>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/register'>register</Link></li>
            </ul>
        )
    }
    else{
        AuthButton=(
            <li><button className='logout' onClick={Logout}>Logout</button></li>
        )
    }

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
                {AuthButton}
            </ul>

        </nav>
        </div>
    </header>
  )
}

export default Header