import React, {createContext, useContext, useState} from 'react';

const StateContext = createContext();

const initialState = {
    cart: false,
    chat: false,
    userProfile: false,
    notification: false,
};

export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [openCart, setOpenCart] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value); //stay at same mode when user logs back in
        setThemeSettings(false);
    }

    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color); //stay at same color when user logs back in
        setThemeSettings(false);
    }

    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: true })
    }

    return (
        <StateContext.Provider value={{
            activeMenu, setActiveMenu, 
            isClicked, setIsClicked, 
            handleClick, 
            screenSize, setScreenSize,
            currentColor, setCurrentColor,
            currentMode, setCurrentMode,
            themeSettings, setThemeSettings,
            setMode, setColor,
            openCart, setOpenCart
            }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);
