import React from 'react'
import { discountData } from '../../data/Data'
import './discount.css'
function Discount() {
  return (
    <div className='discount'>
        <div className="container">
            <div className="flex">
            <img src='https://img.icons8.com/windows/32/fa314a/gift.png' />
            <h2>Big Discounts</h2>
            </div>
            <div className="row S-flex">
                {discountData.map((item,idx)=>(
                    <div className="col" key={idx}>
                        <img src={item.img} alt="" />
                        <h4>{item.name}</h4>
                        <span>${item.price}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Discount