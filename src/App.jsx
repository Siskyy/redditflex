import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';

// Component exports

import Header from './components/Header/Header';
import Feed from './components/Elements/Feed/Feed';
import SideBar from './components/Elements/SideBar/SideBar';

function App() {
    
    const DarkMode = useSelector((state) => state.comment.darkMode);


    return (
        <>
            <Header className={DarkMode ? 'darkMode' : 'lightMode'}/>
            <Feed className={DarkMode ? 'darkMode' : 'lightMode'}/>
            <SideBar className={DarkMode ? 'darkMode' : 'lightMode'}/>
        </>
    )
}

export default App;