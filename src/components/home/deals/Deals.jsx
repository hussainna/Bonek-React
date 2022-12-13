import React from 'react'
import { dealsData } from '../../data/Data'
import './Deals.css'
function Deals() {
  return (
    <div className='deals'>
        <div className="container">
            <div className="flash flex">
            <i className='fa fa-bolt'></i>
            <h2>Flash Deals</h2>
            </div>
            <div className="flashCard C-flex">
                {dealsData.map((item,idx)=>(
                    <div className="flashCardItem" key={idx}>
                        <span>50% off</span>
                        <img src={item.image} alt="" />
                        <label htmlFor="">{item.name}</label>
                        <div className="icons">
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        </div>
                        <h5>${item.price}</h5>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Deals