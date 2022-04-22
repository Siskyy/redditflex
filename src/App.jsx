import React from 'react';
import './App.css';

// Component exports

import Header from './components/Header/Header';
import Feed from './components/Feed/Feed';
import Subreddits from './components/Subreddits/Subreddits';

function App() {
    return (
        <>
            <Header />
            <Feed />
            <Subreddits />
        </>
    )
}

export default App;