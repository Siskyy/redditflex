import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchTerm } from '../../../../store/hardRedditSlice';

const SearchBar = () => {

    const selectedSubreddit = useSelector((state) => state.hardSubreddit.selectedSubreddit);
    const dispatch = useDispatch();

    return (
        <input 
            placeholder={`Search in ${selectedSubreddit}`}
            className="searchbar" 
            type="text"
            onChange={(e) => {dispatch(setSearchTerm(e.target.value))}}
        />
    )
};

export default SearchBar;