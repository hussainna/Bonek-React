import React from 'react'
import { ServicesData } from '../../data/Data'

function Services() {
  return (
    <div className='services'>
        <div className="container">
            <div className="row">
                {ServicesData.map((item,idx)=>(
                    <div className="col" key={idx}>
                        <div className="icon-circle">
                            <i>{item.cover}</i>
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.decs}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Services