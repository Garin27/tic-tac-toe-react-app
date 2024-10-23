import React, {useContext} from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import { HeaderWrapper, LightModeIcon, DarkModeIcon} from './Header.styled'
import {ReactComponent as Logo} from '../../assets/svgs/tic-tac-toe-svg.svg';
import { useNavigate } from 'react-router-dom';

function Header() {
   const {theme, toggleTheme} = useContext(ThemeContext); 
    const navigate = useNavigate();
  return (
    <HeaderWrapper>
        <Logo onClick={() => navigate("/") } className="logo"/>

        <span onClick={() => toggleTheme()}>{theme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />} </span>
       {/* <button onClick={() => toggleTheme()}>Toggle Theme </button>*/}
        
    </HeaderWrapper>
  )
}

export default Header