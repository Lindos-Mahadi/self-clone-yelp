
import React from 'react';
import styles from './SearchResult.module.css';
import { BusinessRating } from '../../../BusinessRating/BusinessRating';

export function SearchResult(props) {
    console.log(props.business);
    const b = props.business;
    if (!b) {
        return (<div/>);
    }

    return (
        <div className={styles['search-result']}>
            <img src={b.image_url} alt='business' className={styles['business-image']}/>
            <div className={styles['business-info']}>
                <h2 className="subtitle">{b.name}</h2>
                <BusinessRating reviewCount={b.review_count} rating={b.rating} />
                {/* <p>{b.price} {tags}</p> */}
            </div>
            <div className={styles['contact-info']}>
                <p>{b.phone}</p>
                {/* {addressLines} */}
            </div>

        </div>
    )
}