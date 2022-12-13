import React from 'react'
import { categoryCoverData } from '../../data/Data'
import './category.css'
function Category() {
  return (
    <div className='category'>
        <div className="container">
            <div className="headText S-flex">
                <h2>
                <i className='fa-solid fa-border-all'></i>
                Top Category
                </h2>
                <span>
                    View All
                <i className='fa-solid fa-caret-right'></i>

                </span>
            </div>
            
            <div className="row S-flex">
                {categoryCoverData.map((item,idx)=>(
                    <div className="col" key={idx}>
                        <img src={item.img} alt="" />
                        <div className="text S-flex">
                            <span className='tleft'>{item.name}</span>
                            <span className='tright'>{item.desc}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Category