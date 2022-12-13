import React from 'react'
import { aboutUs, ContactUs, Customer } from '../../data/Data'
function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2 className='logo'>Bonik</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
                </div>
                <div className="col">
                    <h2>About Us</h2>
                    <ul>
                        {aboutUs.map((item,idx)=>(
                            <li key={idx}>{item.Link}</li>
                        ))}
                    </ul>
                </div>
                <div className="col">
                    <h2>Customer Care</h2>
                    <ul>
                        {Customer.map((item,idx)=>(
                            <li key={idx}>{item.Link}</li>
                        ))}
                    </ul>
                </div>
                <div className="col">
                    <h2>Contact Us</h2>
                    <ul>
                        {ContactUs.map((item,idx)=>(
                            <li key={idx}>{item.Link}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer