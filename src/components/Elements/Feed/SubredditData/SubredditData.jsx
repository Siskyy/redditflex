import React, { useState, useEffect } from 'react';
import './SubredditData.css';
import { useSelector, useDispatch } from 'react-redux';

import Posts from '../../Feed/Posts/Posts';
import { setUnfilteredPosts, filterPosts, selectFilteredPosts } from '../../../../store/filterSlice';


const SubredditData = () => {

    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState('');
    const dispatch = useDispatch();

    const searchTerm = useSelector((state) => state.hardSubreddit.searchTerm);
    const currentSubreddit = useSelector((state) => state.hardSubreddit.selectedSubreddit);
    const unFiltered = useSelector((state) => state.filter.unFilteredPosts);
    const filteredPosts = useSelector(selectFilteredPosts);

    useEffect(() => {
        fetch(`https://www.reddit.com/r/${currentSubreddit}.json`)
        .then(response => {
            if (response.status != 200) {
                console.log("error");
                return;
            }
            response.json().then(data => {
                if (data != null) {
                    setPosts(data.data.children);
                }
            })
        })
    }, [currentSubreddit])

    useEffect(() => {
        dispatch(setUnfilteredPosts(posts));
    }, [posts])

    useEffect(() => {
    }, [searchTerm])

    /* loop through posts and filter out items in searchTerm */



    return (
        <div>
            
            <div className="subreddit-feed">
            {
                (posts != null && filter === '') ? posts.map((post, index) => 
                <Posts key={index} post={post.data}/>) : 
                ((posts != null && filter !== '') ? posts.map((post, index) => 
                <Posts key={index} post={post.data}/>) 
                
                : '' )
            }
            </div>
            <h3></h3>
        </div>
    )

};

export default SubredditData;

// filter where post.post.title includes searchTerm

// filter ( (post) => post.toLowerCase().includes(searcTerm.toLowerCase()))

/* const filteredPosts = posts.flatMap(function (post, index) {
    return [
        post.data.post.title.toLowerCase()
    ]
}) 

*/

/*
    for every item in posts.length {

        if (posts[index].data.title.toLowerCase().includes(filter)) {

            setFilteredPosts([..., posts[index]])
        }
    }

*/

