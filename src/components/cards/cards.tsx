import React, { ReactElement } from 'react'
import CardItem from '../card-item/card-item'
import './cards.css'

interface Props {
    
}

export default function Cards({}: Props): ReactElement {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src='images/img-9.jpg'
                        text='Waterfalls'
                        label='Adventure'
                        path='people/1'
                        />
                        <CardItem 
                        src='images/img-2.jpg'
                        text='Beaches'
                        label='Adventure'
                        path='2'
                        />
                    </ul>
                    <ul className="cards__items small">
                        <CardItem 
                        src='images/img-6.jpg'
                        text='Cultures'
                        label='Adventure'
                        path='3'
                        />
                        <CardItem 
                        src='images/img-3.jpg'
                        text='Seas'
                        label='Adventure'
                        path='4'
                        />
                        <CardItem 
                        src='images/img-4.jpg'
                        text='Islands'
                        label='Adventure'
                        path='5'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}