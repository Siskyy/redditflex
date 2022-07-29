import React, { useEffect } from 'react';
import {BsSearch} from '../../../../../node_modules/react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchTerm, setSubSearchTerm, selectedSubreddit } from '../../../../store/hardRedditSlice';

const Redditsearch = () => {
    
    // const selectedSubreddit = useSelector((state) => state.hardSubreddit.selectedSubreddit);
    const subSearchTerm = useSelector((state) => state.hardSubreddit.subSearchTerm);
    const DarkMode = useSelector((state) => state.comment.darkMode);
    const dispatch = useDispatch();

    return (
        <>
            <form 
                className={DarkMode ? 'searchform-dark2' : 'searchform-light2'}
                >
                    <input 
                    placeholder='r/ subreddit'
                    className="searchbar"
                    type="text"
                    onChange={(e) => {dispatch(setSubSearchTerm(e.target.value))}}
                    />
                <button type="button"
                    onClick={() => {dispatch(selectedSubreddit(subSearchTerm))}}
                ><BsSearch /></button>
            </form>
               
        </>
    )
}

export default Redditsearch;