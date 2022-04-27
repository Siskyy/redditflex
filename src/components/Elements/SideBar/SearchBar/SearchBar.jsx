import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchTerm } from '../../../../store/hardRedditSlice';
import { setFilter, filterPosts } from '../../../../store/filterSlice';


const SearchBar = () => {

    const selectedSubreddit = useSelector((state) => state.hardSubreddit.selectedSubreddit);
    const searchTerm = useSelector((state) => state.hardSubreddit.searchTerm);
    const dispatch = useDispatch();

    useEffect(() => {
        //dispatch(setFilter(searchTerm));
        //dispatch(filterPosts);
    }, [searchTerm])


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