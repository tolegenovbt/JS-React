import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom';
import { products } from '../../mock/products';
// import '../../components/cards/cards.css'
import ProductItem from '../product-item/product-item';
import '../product-item/product-item.css'


interface Props {
    
}

export default function Products({}: Props): ReactElement {
    const elements = products.map((item: any) => {
      
        const { src, product_id,  text,  label, description, category_id } = item;
        
          return ( 
                      <ProductItem src={src} product_id={product_id} text = {text} label={label} description={description} category_id={category_id}  />);
      })

    return (
        <>
        <div>
            <h1  className="products">Products</h1>
        </div>
        <div id="product">
            {elements}
        </div>
        </>
    )
}
