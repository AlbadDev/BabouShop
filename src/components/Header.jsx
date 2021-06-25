import React from 'react'
import Menu  from './svg/bars-solid.svg'
import Close  from './svg/times-solid.svg'

export default function Header() {
    return (
        
        <header>
            <div className='logo'>
                <h1><a href='/'>La Cuisine De Thian</a></h1>
            </div>
            <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/'>Food</a></li>
                <li><a href='/'>About</a></li>
                <li><a href='/'>Contact</a></li>
                <li><a href='/'>Login / Register</a></li>
                <li>
                    <img src={Close} width='30'  className='menu'/>
                </li>
            </ul>

            <div className='menu'>
                <img src={Menu} width='30'/>
            </div>   
        </header>
    )   
}
