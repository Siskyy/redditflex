import React, {useState, useEffect } from 'react';
import './Header.css';
import { useSelector, useDispatch } from 'react-redux';
import { setDarkMode } from '../../store/commentSlice';

const Header = () => {

    const DarkMode = useSelector((state) => state.comment.darkMode);
    const dispatch = useDispatch();
    const [darkMode, setdarkMode] = useState(true);

    useEffect(() => {
        dispatch(setDarkMode(darkMode))
    }, [darkMode])

    useEffect(() => {
        if (!darkMode) {
            document.body.style.background = '#CFF4FC';
        } else {
            document.body.style.background = 'rgb(48, 48, 48)';
        }
        
    }, [darkMode])

    return (
        <header className={DarkMode ? 'banner-darkmode' : 'banner-lightmode'}>
            <h2 className="web-title">Reddit<span className="highlight">Flex</span></h2>
            <div className="switch-container">
                <input 
                    className="darkmode-switch" 
                    type="checkbox" 
                    id="dark-toggle"
                    onChange={() => setdarkMode(!darkMode)}
                />
                <label for="dark-toggle" className="dark-slider"></label>
            </div>
        </header>
    )

}

export default Header;