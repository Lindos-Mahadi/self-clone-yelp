import React from "react";
import { TopNav } from "./TopNav/TopNav";
import logo from '../assets/logo/logo.png';
import styles from './LandingPage.module.css'
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchSuggestion } from "./SearchSuggestion/SearchSuggestion";

export function LandingPage(){
    return(
        <div>
            <TopNav />
            <img src={logo} className={styles.logo} alt='logo'/>
            <SearchBar />
            <SearchSuggestion />
        </div>
    )
}