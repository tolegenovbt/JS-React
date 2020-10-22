import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { category } from '../../mock/category'
// import '../app/App.css'
import CategoryItem from '../category-item/category-item'
import '../cards/cards.css';


interface Props {
    
}

export default function Categories({}: Props): ReactElement {
    const elements = category.map((item: any) => {
      
        const { src, text,  label, category_id } = item;
        
          return ( <Link to={`categories/${category_id}`} key = {category_id} className="list-group-item">
                      <CategoryItem src={src} text = {text} label={label} category_id={category_id}  />
                  </Link>
            );
      })

    return (
        <>
        <div>
            <h1  className="categories">Categories</h1>
        </div>
        <div className='cards'>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        {
                            category.map(category=>(
                                <li className="cards__item">
                                    <Link to={`categories/${category.category_id}`} className="cards__item__link">
                                        <figure className='cards__item__pic-wrap' data-category={category.label}>
                                            <img src={`../${category.src}`} alt="Travel Image" className="cards__item__img"/>
                                        </figure>
                                        <div className="cards__item__info">
                                            <h5 className="cards__item__text">{category.text}</h5>
                                        </div>
                                    </Link>
                                </li>   
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}
