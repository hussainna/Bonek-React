import React from 'react'
import './top.css'
function Top() {
  return (
    <div className='top'>
        <div className="container S-flex">
            <div className="contact">
                <span>
                <i className='fa fa-phone'></i>
                    +964783223232
                </span>
                <span>
                   <i className='fa fa-envelope'></i>
                    hussain@gmail.com
                </span>
            </div>
            <div className="topText flex">
                <span>Theme FAQ"s</span>
                <span>Need Help?</span>
                <span>EN</span>
                <span>USD</span>
            </div>
        </div>
    </div>
  )
}

export default Top