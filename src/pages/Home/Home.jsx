 import React from 'react'
 import { Container, Subtitle, Title } from '../../styles/General.styled'
 import Button from "../../components/Header/Button/Button"
 import { useNavigate } from 'react-router-dom'
 
 
 function Home() {
    const navigate = useNavigate()
   return (
     <Container>
        <Title>Tic Tac Toe</Title>
        <Subtitle>Play with your friends, highest score wins</Subtitle>
        <Button onClick={() => navigate("/game-on") }>Play Now</Button>
     </Container>
   )
 }
 
 export default Home