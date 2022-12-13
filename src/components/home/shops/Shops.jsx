import React from 'react'
import { shopItemsData, shopsData } from '../../data/Data'
import './shops.css'
function Shops() {
  return (
    <div className='shops'>
        <div className="container">
            <div className="brands">
                <h2>Brands</h2>
                <div className="row">
                    {shopsData.map((item,idx)=>(
                        <div className="col flex" key={idx}>
                            <img src={item.img} alt="" />
                            <span>{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mobilePhone">
                <h2>Mobile Phones</h2>
                <div className="row">
                    {shopItemsData.map((item,idx)=>(
                        <div className="col" key={idx}>
                            <span className='brand'>{item.brand}</span>
                            <img src={item.img} alt="" />
                            <h4>{item.name}</h4>
                            <div className="icons">
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        </div>
                            <span className="price">${item.price}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Shops