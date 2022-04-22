export const RedditAPI = 'https://www.reddit.com';


/* Fetch the subreddits */
export const fetchSubreddits = async () => {
    const response = await fetch(`${RedditAPI}.json`);
    const json = await response.json();

    /* return the fetch response, and map an object (subreddit) with all the reddit data  */
    return json.data.children.map((subreddit) => subreddit.data);
}