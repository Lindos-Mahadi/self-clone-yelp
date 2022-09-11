import React from 'react';
import { NavBar } from '../NavBar/Navbar';
import { SubNav } from '../NavBar/SubNav/SubNav';
import { SearchResults } from './SearchResults/SearchResults';
import {SearchResultsSummary} from './SearchResultsSummary/SearchResultsSummary';

export function Search() {
    return (
        <div>
            <NavBar />
            <SubNav />
            {/* <SearchResultsSummary term='burgers' location='berlin'/> */}
            <SearchResultsSummary />
            <SearchResults />
        </div>
    );
}