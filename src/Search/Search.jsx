import React from 'react';
import { useHistory } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';
import { SubNav } from '../NavBar/SubNav/SubNav';
import { SearchResults } from './SearchResults/SearchResults';
import {SearchResultsSummary} from './SearchResultsSummary/SearchResultsSummary';
import {useBusinessSearch} from '../hooks/yelp-api/useBusinessSearch';

export function Search() {

    const {location} = useHistory();
    const params = new URLSearchParams(location.search);
    const term = params.get('find_desc');
    const locationParam = params.get('find_loc');

    const [businesses, amountResults, searchParams, setSearchParams] = useBusinessSearch(term, locationParam);


    return (
        <div>
            <NavBar term={term} location={locationParam} />
            <SubNav />
            {/* <SearchResultsSummary term='burgers' location='berlin'/> */}
            <SearchResultsSummary term={term} location={locationParam} />
            <SearchResults businesses={businesses} />
        </div>
    );
}