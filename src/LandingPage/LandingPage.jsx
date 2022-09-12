import React from "react";
import { TopNav } from "./TopNav/TopNav";
import logo from '../assets/logo/logo.png';
import styles from './LandingPage.module.css'
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchSuggestion } from "./SearchSuggestion/SearchSuggestion";
// import useReactRouter from 'use-react-router';
import useReactRouter from 'use-react-router';
import { useHistory, useLocation } from "react-router-dom";

export function LandingPage(){
    
    // const {history} = useReactRouter();
    let {history} = useHistory();

    // function search(term, location) {
    //     const urlEncodedTerm = encodeURI(term);
    //     const urlEncodedLocation = encodeURI(location);
    //     history.push(`/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`);
    // }


    function search(term, location){
        // const urlEncodedTerm = encodeURI(term);
        // const urlEncodedLocation = encodeURI(location);
        // history.push(`/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`);
    }

    return(
        <div className={styles.landing}>
            <div className={styles['search-area']}>
                <TopNav />
                <img src={logo} className={styles.logo} alt='logo'/>
                <SearchBar search={search}/>
                <SearchSuggestion />
            </div>
        </div>
    )
}