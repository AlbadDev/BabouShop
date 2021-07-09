import React from 'react'

export default function Products() {
    return (
      <div className='products'>
        <div className='card'>
          <a href='/'>
            <img alt='food' src='https://lh3.googleusercontent.com/proxy/wF6QSPVkQGTG-8sXSwqUBhEekjQviKapJCmObu_-qIW0WA5dDWMVdeZZV6daipWGdFIOAqmpVAIIpoGbvj3pi5FB8KX0V0DtH2T7YdHTdFL7QhS4_675n_h_mGf9rRsHFmUTiZQ' />
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
    )
}
