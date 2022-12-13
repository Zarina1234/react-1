import React from 'react'
import './mainHeader.css'
import logo from '../../components/imges/Flower Shop.png'
import photo from '../../components/imges/Rectangle 7 (1).png'
import pictures from '../../components/imges/Rectangle 5.png'
import flower from '../../components/imges/Rectangle 25.png'


const MainHeader = () => {
  return (
    <div className='container'>
        <ul className='menu'>
            <li>Home</li>
            <li>Shop</li>
            <li>Blog</li>
            <li>About</li>
        </ul>
        <h1>
            <img src={logo}/>
            <img src={photo}/>
            <img src={pictures}/>
            <img src={flower}/>
        </h1>
    </div>
  )
}

export default MainHeader