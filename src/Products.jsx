import React, { useState } from 'react'

const Products = ({name, price, description, category, image}) => {
    const [change, setChange] = useState(true)

    const handleChange = () =>{
        setChange(prevState => !prevState)
    }
  return (
    <div className='card'>
        <img src={image} alt={name} />

    <div className='card-body'>
        <h2>{name}</h2>
        <h3>${price}</h3>
        <p>{description}</p>
        <h4>{category}</h4>
        <button 
        className='btn' 
        onClick={handleChange}
        style={{
            backgroundColor: change ? "rgb(249, 5, 196)" : "rgb(5, 62, 249)"
        }}
        >{change ? 'Add to Cart🛒' : 'Remove from Cart🛒'}</button>
    </div>
    </div>
  )
}

export default Products