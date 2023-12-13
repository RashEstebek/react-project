import React from 'react'

const Product = (props) => {
        const {product} = props;
    return (
        <div>
            <img src={product.img} alt={product.product_name}/>
            <h3>{product.product_name}</h3>
        </div>
  )
}

export default Product