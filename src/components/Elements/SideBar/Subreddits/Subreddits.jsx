import React from 'react';
import './Subreddits.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectedSubreddit } from '../../../../store/hardRedditSlice';

const Subreddits = () => {

    const DarkMode = useSelector((state) => state.comment.darkMode);
    const dispatch = useDispatch();

    /* Select subrediit */
    const selected = useSelector((state) => state.hardSubreddit.selectedSubreddit);
    /* 
        If select == (subreddit name)
            className = selected-sub
    */

    return (
        <>
        <ul className="subreddit-list">
            <button 
                onClick={() => {dispatch(selectedSubreddit('programming'))}}
                className=
                {
                    selected == "programming" && DarkMode ? 'selected subredditcard-dark' :
                    selected == "programming" && !DarkMode ? 'selected subredditcard-light' :
                    DarkMode ? 'subredditcard-dark' : 'subredditcard-light'
                }
            >
                <img className="subreddit-icon" src="https://styles.redditmedia.com/t5_2fwo/styles/communityIcon_1bqa1ibfp8q11.png?width=256&s=45361614cdf4a306d5510b414d18c02603c7dd3c"/>
                <p className="subreddit-title">Programming</p>
            </button>
            <button 
                onClick={() => {dispatch(selectedSubreddit('movies'))}}
                className=
                {
                    selected == "movies" && DarkMode ? 'selected subredditcard-dark' :
                    selected == "movies" && !DarkMode ? 'selected subredditcard-light' :
                    DarkMode ? 'subredditcard-dark' : 'subredditcard-light'
                }
            >
                <img className="subreddit-icon" src="https://styles.redditmedia.com/t5_2qh3s/styles/communityIcon_yq9ah8eniar81.jpg?width=256&format=pjpg&s=f85b7a96d41be49341fb41f7df9c5e563c5460e0" />
                <p className="subreddit-title">Movies</p>
            </button>
            <button 
                onClick={() => {dispatch(selectedSubreddit('askreddit'))}}
                className=
                {
                    selected == "askreddit" && DarkMode ? 'selected subredditcard-dark' :
                    selected == "askreddit" && !DarkMode ? 'selected subredditcard-light' :
                    DarkMode ? 'subredditcard-dark' : 'subredditcard-light'
                }
            >
                <img className="subreddit-icon" src="https://styles.redditmedia.com/t5_2qh1i/styles/communityIcon_tijjpyw1qe201.png?width=256&s=4e76eadc662b8155a93d4d7487a6d3acb35f4334" />
                <p className="subreddit-title">Askreddit</p>
            </button>
            <button 
                onClick={() => {dispatch(selectedSubreddit('pics'))}}
                className=
                {
                    selected == "pics" && DarkMode ? 'selected subredditcard-dark' :
                    selected == "pics" && !DarkMode ? 'selected subredditcard-light' :
                    DarkMode ? 'subredditcard-dark' : 'subredditcard-light'
                }
            >
                <img className="subreddit-icon" src="https://b.thumbs.redditmedia.com/VZX_KQLnI1DPhlEZ07bIcLzwR1Win808RIt7zm49VIQ.png" />
                <p className="subreddit-title">Pics</p>
            </button>
            <button 
                onClick={() => {dispatch(selectedSubreddit('news'))}}
                className=
                {
                    selected == "news" && DarkMode ? 'selected subredditcard-dark' :
                    selected == "news" && !DarkMode ? 'selected subredditcard-light' :
                    DarkMode ? 'subredditcard-dark' : 'subredditcard-light'
                }
            >
                <img className="subreddit-icon" src="https://styles.redditmedia.com/t5_2qh3l/styles/communityIcon_fmygcobc22z81.png?width=256&s=20360f000285c26be3d504fdb0cc8e6d6d58289c" />
                <p className="subreddit-title">News</p>
            </button>
            <button 
                onClick={() => {dispatch(selectedSubreddit('food'))}}
                className=
                {
                    selected == "food" && DarkMode ? 'selected subredditcard-dark' :
                    selected == "food" && !DarkMode ? 'selected subredditcard-light' :
                    DarkMode ? 'subredditcard-dark' : 'subredditcard-light'
                }
            >
                <img className="subreddit-icon" src="https://a.thumbs.redditmedia.com/bDWcvO6mkX1TIcTnrO-N-5QJPUaWaq6nnQFel3kywD8.png" />
                <p className="subreddit-title">Food</p>
            </button>
            <button 
                onClick={() => {dispatch(selectedSubreddit('memes'))}}
                className=
                {
                    selected == "memes" && DarkMode ? 'selected subredditcard-dark' :
                    selected == "memes" && !DarkMode ? 'selected subredditcard-light' :
                    DarkMode ? 'subredditcard-dark' : 'subredditcard-light'
                }
            >
                <img className="subreddit-icon" src="https://styles.redditmedia.com/t5_2qjpg/styles/communityIcon_bzdtpod2vtv81.png?width=256&s=619a5f34c589ef260456ea47c216a1e051f61a2b" />
                <p className="subreddit-title">memes</p>
            </button>
            <button 
                onClick={() => {dispatch(selectedSubreddit('art'))}}
                className=
                {
                    selected == "art" && DarkMode ? 'selected subredditcard-dark' :
                    selected == "art" && !DarkMode ? 'selected subredditcard-light' :
                    DarkMode ? 'subredditcard-dark' : 'subredditcard-light'
                }
            >
                <img className="subreddit-icon" src="https://b.thumbs.redditmedia.com/VoZlOfOxgNGkqayUrmGI96XuSOGKVT-MVI4WK-CXP3o.png" />
                <p className="subreddit-title">Art</p>
            </button>
            <button 
                onClick={() => {dispatch(selectedSubreddit('cats'))}}
                className=
                {
                    selected == "cats" && DarkMode ? 'selected subredditcard-dark' :
                    selected == "cats" && !DarkMode ? 'selected subredditcard-light' :
                    DarkMode ? 'subredditcard-dark' : 'subredditcard-light'
                }
            >
                <img className="subreddit-icon" src="https://styles.redditmedia.com/t5_2qhta/styles/communityIcon_mcovxbr4g1r81.png?width=256&s=267daaca8ab99d20ae3062d326420e0df6a9e57e" />
                <p className="subreddit-title">Cats</p>
            </button>
            <button 
                onClick={() => {dispatch(selectedSubreddit('dogs'))}}
                className=
                {
                    selected == "dogs" && DarkMode ? 'selected subredditcard-dark' :
                    selected == "dogs" && !DarkMode ? 'selected subredditcard-light' :
                    DarkMode ? 'subredditcard-dark' : 'subredditcard-light'
                }
            >
                <img className="subreddit-icon" src="https://styles.redditmedia.com/t5_2qhhk/styles/communityIcon_n7ckf4gv4ik11.png?width=256&s=208e562ceb88dafa08fe8f9d1d6e14807db1fdd4" />
                <p className="subreddit-title">Dogs</p>
            </button>
            <button 
                onClick={() => {dispatch(selectedSubreddit('space'))}}
                className=
                {
                    selected == "space" && DarkMode ? 'selected subredditcard-dark' :
                    selected == "space" && !DarkMode ? 'selected subredditcard-light' :
                    DarkMode ? 'subredditcard-dark' : 'subredditcard-light'
                }
            >
                <img className="subreddit-icon" src="https://styles.redditmedia.com/t5_2qh87/styles/communityIcon_ub69d1lpjlf51.png?width=256&s=920c352b6d0c69518b6978ba8b456176a8d63c25" />
                <p className="subreddit-title">Space</p>
            </button>
            <button 
                onClick={() => {dispatch(selectedSubreddit('jokes'))}}
                className=
                {
                    selected == "jokes" && DarkMode ? 'selected subredditcard-dark' :
                    selected == "jokes" && !DarkMode ? 'selected subredditcard-light' :
                    DarkMode ? 'subredditcard-dark' : 'subredditcard-light'
                }
            >
                <img className="subreddit-icon" src="https://b.thumbs.redditmedia.com/ea6geuS5pIeDjJdtVdbcgfQYX-RwGYwsbHB02tCJmMs.png" />
                <p className="subreddit-title">Jokes</p>
            </button>
        </ul>
        </>
    )
};

export default Subreddits;