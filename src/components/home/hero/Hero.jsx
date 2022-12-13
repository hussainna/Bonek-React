import React from 'react'
import './hero.css'
import { Link } from 'react-router-dom'
import { categoryData } from '../../data/Data'
function Hero() {
  return (
    <section className='hero'>
        <div className="container flex">
            <div className="sidebarCategory">
                <ul>
                    {categoryData.map((item,idx)=>(
                        <li className='flex' key={idx}>
                            <img src={item.img} alt="" />
                            <Link>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="heroText flex">
                <div className="text">
                    <h1>50% Off for your First Shopping</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo quo eos qui quam amet neque, saepe deserunt </p>
                    <button>Visit Collections</button>
                </div>
                <img src="./images/SlideCard/slide-1.png" alt="" />
            </div>
        </div>
    </section>
  )
}

export default Hero