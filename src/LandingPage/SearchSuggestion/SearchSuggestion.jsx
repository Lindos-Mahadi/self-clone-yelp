import React from "react";
import styles from './SearchSuggestion.module.css';

export function SearchSuggestion() {
    return(
        <div className={styles.suggestions}>
            <span className="icon is-small"><i className="fa fa-utensils"></i></span><span className={styles.suggestion}>Restaurants</span>
            <span className="icon is-small"><i className="fa fa-martini-glass-citrus"></i></span><span className={styles.suggestion}>Nightlife</span>
            <span className="icon is-small"><i className="fa fa-concierge-bell"></i></span><span className={styles.suggestion}>Services</span>
            <span className="icon is-small"><i className="fa fa-truck"></i></span><span className={styles.suggestion}>Delivery Services</span>
        </div>
    )
}