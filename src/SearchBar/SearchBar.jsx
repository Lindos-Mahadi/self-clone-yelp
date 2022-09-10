import React from "react";
import styles from './SearchBar.module.css';

export function SearchBar() {
    return ( 
        <div>
            <div className="field has-addons">
                <p className="control">
                    <input className={`input is-medium ${styles['input-control']}`} type="text" placeholder="tacos, cheap dinner, Max's" />
                </p>
                <p className="control">
                    <button className="button is-medium is-dark">Search</button>
                </p>
                <p className="control">
                    <input className={`input is-medium ${styles['input-control']}`} type="text" placeholder="address, neighborhood, city, state or zip" />
                </p>
                <p className="control">
                    <button className="button is-medium is-dark">Near</button>
                </p>
                <div className={`button is-medium ${styles['search-button']}`}>
                    <span className={`icon is-small ${styles['search-icon']}`}><i className="fa fa-search"></i></span>
                </div>
            </div>
        </div>
     ); 
}
