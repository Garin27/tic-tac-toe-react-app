import React, {useContext} from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import { HeaderWrapper, LightModeIcon, DarkModeIcon} from './Header.styled'
import {ReactComponent as Logo} from '../../assets/svgs/tic-tac-toe-svg.svg';
import { useNavigate } from 'react-router-dom';
import { SfxContext } from '../../contexts/SFXContext';

function Header() {
   const {theme, toggleTheme} = useContext(ThemeContext); 
    const {hoverSfx, clickSfx} = useContext(SfxContext);
    const navigate = useNavigate();
  return (
    <HeaderWrapper>
        <Logo 
        onClick={() => {
         clickSfx()
         navigate("/") }}
          className="logo"
           onMouseEnter={() => hoverSfx()}/>

        <span 
        onClick={() => {
        clickSfx()
        toggleTheme()}}
         onMouseEnter={() => hoverSfx()} >
          {theme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
           </span>
       {/* <button onClick={() => toggleTheme()}>Toggle Theme </button>*/}
        
    </HeaderWrapper>
  )
}

export default Header