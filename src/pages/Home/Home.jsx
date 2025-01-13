 import React, { useContext } from 'react'
 import { Container, Subtitle, Title } from '../../styles/General.styled'
 import Button from "../../components/Header/Button/Button"
 import { useNavigate } from 'react-router-dom'
 import { SfxContext } from '../../contexts/SFXContext'
 
 
 function Home() {
    const navigate = useNavigate()
    const { hoverSfx, clickSfx } = useContext(SfxContext);
   return (
     <Container columnBased>
        <Title>Tic Tac Toe</Title>
        <Subtitle>Play with your friends, highest score wins</Subtitle>
        <Button 
            onClick={() => {
              clickSfx()
              navigate("/game-on")
            
            }} 
            onMouseEnter={() => hoverSfx ()}
            >
              Play Now
              </Button>
     </Container>
   )
 }
 
 export default Home