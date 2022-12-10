import React from 'react'
import Products from '../product/Products'
import "./Home.css"

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img className='home__image' src='http://localhost:3000/banner1.jpg' alt='banner'/>
        </div>
        <div className='home__row'>
          <Products 
            id="Raphl2458"
            title="Shield Hero Rahply"
            price={62.99}
            image="http://localhost:3000/Raphl.jpg"
            rating={5}/>
          <Products 
            id="Bannerl24457"
            title="Shield Hero Bannergril"
            price={52.99}
            image="http://localhost:3000/flag.jpg"
            rating={4}/>
        </div>
        <div className='home__row'>
          <Products 
            id="Foot14387"
            title="Footman eldenring"
            price={58.99}
            image="http://localhost:3000/soldi.jpg"
            rating={4}
          />
          <Products 
            id="Fortress13487"
            title="Macross Fortress"
            price={49.95}
            image="http://localhost:3000/fortress.jpg"
            rating={5}
          />
          <Products 
            id="Plane46547"
            title="Macross Plane"
            price={49.95}
            image="http://localhost:3000/plane1.jpg"
            rating={4}
          />
        </div>
        <div className='home__row'>
          <Products 
            id="Model15487"
            title="Model Kit"
            price={57.65}
            image="http://localhost:3000/model.jpg"
            rating={5}
          />
        </div>
    </div>
  )
}

export default Home