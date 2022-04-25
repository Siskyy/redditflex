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

/* Fetch the comments for post of the current post the current subreddit selected */
export const fetchComments = async (link) => {
    const response = await fetch(`${RedditAPI}${link}.json`);
    const json = await response.json();

    return json[1].data.children.map((subreddit) => subreddit.data);
};