import React from 'react';
import './App.css';

// Component exports

import Header from './components/Header/Header';
import Feed from './components/Elements/Feed/Feed';
import SideBar from './components/Elements/SideBar/SideBar';

function App() {
    return (
        <>
            <Header />
            <Feed />
            <SideBar />
        </>
    )
}

export default App;