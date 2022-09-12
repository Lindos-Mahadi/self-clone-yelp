import React, { useState } from "react";
import styles from './SearchBar.module.css';
import { useHistory, useLocation } from "react-router-dom";

export function SearchBar(props) {

    const [term, setTerm] = useState(props.term || '');
    const [location, setLocation] = useState(props.location || '');
    // Accessing the history instance created by React
    const history = useHistory();

    function submit(e){
        console.log(term, location);
        history.push(`/search?find_desc=${term}&find_loc=${location}`);
        e.preventDefault();
    }
 
    const sizeClass = props.small ? '' : 'is-medium';
    return ( 
        <form onSubmit={submit}>
            <div className="field has-addons">
                <p className="control">
                    <input className={`input  ${sizeClass} ${styles['input-control']}`}
                    value={term}
                    onChange={(e)=>setTerm(e.target.value)}
                    type="text" 
                    placeholder="tacos, cheap dinner, Max's" />
                </p>
                <div className="control">
                    <button className={`button is-dark  ${sizeClass}`}>Search</button>
                </div>
                <p className="control">
                    <input className={`input ${sizeClass} ${styles['input-control']}`}
                    value={location} 
                    onChange={(e)=>setLocation(e.target.value)}
                    type="text" 
                    placeholder="address, neighborhood, city, state or zip" />
                </p>
                <div className="control">
                    <div className={`button is-dark  ${sizeClass}`}>Near</div>
                </div>
                <div className={`button ${sizeClass}  ${styles['search-button']}`} onClick={submit}>
                    <span className={`icon is-small ${styles['search-icon']}`}><i className="fa fa-search"></i></span>
                </div>
            </div>
        </form>
     ); 
}
