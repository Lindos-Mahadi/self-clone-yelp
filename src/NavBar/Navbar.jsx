import React from 'react';
import logo from '../assets/logo/logo.png';
import styles from './NavBar.module.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { Link, useHistory } from 'react-router-dom';

export function NavBar(props) {

    const {location} = useHistory();

    return (
        <div className={styles['nav-bar']}>
            <Link to='/'>
                <img src={logo} className={styles.logo} alt='belb logo' />
            </Link>
            <SearchBar small term={props.term} location={props.location} />
            <button className={`button ${styles['nav-button']}`}>Sign In</button>
            <button className={`button ${styles['nav-button']}`}>Register</button>
        </div>
    );
}