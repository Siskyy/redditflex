export const RedditAPI = 'https://www.reddit.com';


/* Fetch the subreddits */
export const fetchSubreddits = async () => {
    const response = await fetch(`${RedditAPI}/subreddits.json`);
    const json = await response.json();

    /* return the fetch response, and map an object (subreddit) with all the reddit data  */
    return json.data.children.map((subreddit) => subreddit.data);
};

/* Fetch the subReddit posts using the current subreddit selected */
export const fetchSubredditPosts = async (subreddit) => {
    const response = await fetch(`${RedditAPI}${subreddit}.json`);
    const json = await response.json();

    return json.data.children.map((post) => post.data);
};