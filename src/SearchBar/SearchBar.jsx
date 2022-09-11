import React from "react";
import styles from './SearchBar.module.css';

export function SearchBar(props) {
    const sizeClass = props.small ? '' : 'is-medium';
    return ( 
        <div>
            <div className="field has-addons">
                <p className="control">
                    <input className={`input  ${sizeClass} ${styles['input-control']}`} type="text" placeholder="tacos, cheap dinner, Max's" />
                </p>
                <p className="control">
                    <button className={`button is-dark  ${sizeClass}`}>Search</button>
                </p>
                <p className="control">
                    <input className={`input ${sizeClass} ${styles['input-control']}`} type="text" placeholder="address, neighborhood, city, state or zip" />
                </p>
                <p className="control">
                    <button className={`button is-dark  ${sizeClass}`}>Near</button>
                </p>
                <div className={`button ${sizeClass}  ${styles['search-button']}`}>
                    <span className={`icon is-small ${styles['search-icon']}`}><i className="fa fa-search"></i></span>
                </div>
            </div>
        </div>
     ); 
}
