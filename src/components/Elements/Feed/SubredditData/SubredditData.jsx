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
    const filteredPosts = useSelector((state) => state.filter.filteredPosts);

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

    



    return (
        <div>
            
            <div className="subreddit-feed">
            {
                (posts != null && filteredPosts === '') ? posts.map((post, index) => 
                <Posts key={index} post={post.data}/>) : ((posts != null && filteredPosts !== '') ? 
                filteredPosts.map((post, index) => 
                <Posts key={index} post={post.data}/>) : '')
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

