import React from 'react'

export default function Products() {
    return (
        <section>
            <div className='products'>
                <div className='card'>
                    <a href='/'>
                        <img src='https://scontent-lcy1-1.xx.fbcdn.net/v/t1.6435-9/166314530_305565280992747_5652775431287749431_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=a26aad&_nc_ohc=q0gJms68dewAX-_EoQk&_nc_ht=scontent-lcy1-1.xx&oh=c64ebdb2519bbf0467171a559e085517&oe=60D9C030' />
                    </a>
                <div className='box'>
                    <h3 title='watch product 01'>
                        <a href='/'>Food 01</a>
                    </h3>
                    <p>Description</p>
                    <h4>Price $100</h4>
                    <button>Add To Card</button>
                </div>
            </div>

            <div className='card'>
                <a href='/'>
                    <img src='https://scontent-lcy1-1.xx.fbcdn.net/v/t1.6435-9/94734175_157310239151586_3723010942187864064_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=9267fe&_nc_ohc=1y59Ax8dp1cAX9nTp-q&tn=bhqNdsZ1N-LaHlhr&_nc_ht=scontent-lcy1-1.xx&oh=007a8da45cec063967dc97279d717a55&oe=60DA1578'/>
                </a>
            <div className='box'>
                <h3 title='watch product 01'>
                    <a href='/'>Food 01</a>
                </h3>
                <p>Description</p>
                <h4>Price $100</h4>
                <button>Add To Card</button>
            </div>
          </div>

          <div className='card'>
            <a href='/'>
              <img src='https://scontent-lcy1-1.xx.fbcdn.net/v/t1.6435-9/160865527_300083631540912_8736431444410597340_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=a26aad&_nc_ohc=uVFFHZtk4fgAX_J25k2&_nc_ht=scontent-lcy1-1.xx&oh=6e213b42a83455c276c1d74ee4f7d45b&oe=60DA91EF' />
            </a>
            <div className='box'>
              <h3 title='watch product 01'>
                <a href='/'>Food 01</a>
              </h3>
              <p>Description</p>
              <h4>Price $100</h4>
              <button>Add To Card</button>
            </div>
          </div>
        </div>
      </section>
    )
}
