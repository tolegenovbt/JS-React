import React, { ReactElement } from 'react';
import { Link, useRouteMatch } from 'react-router-dom'
// import '../cards/cards.css';
import Comments from '../comments/comments-list';
import './product-details.css';

interface Props {
    src: string,
    text: string,
    label: string,
    description: string,
}

export default function ProductDetailsItem({src, text, label, description}: Props): ReactElement {

    const match = useRouteMatch();
    console.log(src)

    return (
        <>
            <div className="details">
                <img src={`../../${src}`} alt="Travel Image"/>
                <div className="box">
                    <div className="row">
                        <h2>{text}</h2>
                    </div>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}
