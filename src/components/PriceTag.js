import './PriceTagStyle.css';
import React from 'react'
import { Link } from 'react-router-dom'

function PriceTag() {
  return (
    <div className='pricing'>
        <div className="card-container">
            <div className="card">
                <h3>- Basic -</h3>
                <span className='bar'></span>
                <p className="btc">$ 100</p>
                <p>- 3 Days -</p>
                <p>- 3 Pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className="btn">Purchase now</Link>
            </div>
           
            <div className="card">
                <h3>- Basic -</h3>
                <span className='bar'></span>
                <p className="btc">$ 300</p>
                <p>- 3 Days -</p>
                <p>- 3 Pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className="btn">Purchase now</Link>
            </div>

            <div className="card">
                <h3>- Basic -</h3>
                <span className='bar'></span>
                <p className="btc">$ 500</p>
                <p>- 3 Days -</p>
                <p>- 3 Pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className="btn">Purchase now</Link>
            </div>


        </div>
    </div>
  )
}

export default PriceTag