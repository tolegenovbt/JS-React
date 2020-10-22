import React, { ReactElement } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { products } from '../../mock/products';
import CategoriesDetailItem from './categories-detail-item';
// import Category from '../../modules/categories'
import '../cards/cards.css'
import './categories-detail.css'

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
        <div className='cards'>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="product">
                        {elements}
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}
