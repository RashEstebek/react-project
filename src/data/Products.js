import React from 'react';
import Product from './Product';

const Products = (props) => {
    const {products} = props;
  return (
    <div>
        <main>
            <div className='product'>
                {products.map((product) => (
                    <Product key={product.id} product={product}/>
                ))}
            </div>
        </main>
    </div>
  )
}

export default Products;