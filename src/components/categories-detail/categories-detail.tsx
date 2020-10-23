import React, { ReactElement } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { products } from '../../mock/products';
import CategoriesDetailItem from './categories-detail-item';
// import Category from '../../modules/categories'
// import '../cards/cards.css'
import './categories-detail.css'
import { category } from '../../mock/category';
import ProductDetails from '../products-detail/product-details';

interface Props {

}

export default function CategoriesDetail({}: Props): ReactElement {

    const match = useRouteMatch<{category_id: string}>();

     const filteredElements = products.filter((item)=>
          item.category_id === parseInt(match.params.category_id)
    )

      const elements = filteredElements.map((item: any) => {
      
        const { product_id, text, label, src,  description, category_id } = item;
        
          return ( <li key = {category_id} className="list-group-item">
                      <CategoriesDetailItem src={src} product_id={product_id} text = {text} label={label} description={description} category_id={category_id}  />
                  </li>
            );
      })


    return (
        <>
        <div>
            <h1  className="categories">Products</h1>
        </div>
        <div id="product">
            {elements}
        </div>
        </>
    )
    // <div className='cards'>
    //         <div className="cards__container">
    //             <div className="cards__wrapper">
    //                 <ul className="product">
    //                     {elements}
    //                 </ul>
    //             </div>
    //         </div>
    //     </div>

    // <ul className="">
    //             {products.map(product=>(
    //                 <li className="card" key={product.product_id}>
    //                     <Link to={`products/${product.product_id}`}>
    //                             <img src={`../${product.src}`} alt="Travel Image"/>
    //                     </Link>
    //                     <div className="content">
    //                         <span>{product.label}</span>
    //                         <h3>
    //                             <Link to={`products/${product.product_id}`}>{product.text}</Link>
    //                         </h3>
    //                         <p>{product.description}</p>
    //                     </div>
    //                 </li>  
    //             ))}
    //         </ul>
}
