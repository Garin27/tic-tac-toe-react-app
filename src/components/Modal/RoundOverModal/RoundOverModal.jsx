/*import React, { useContext } from 'react';
import { Title, Subtitle } from '../../../styles/General.styled';
import { ModalHeader, ModalBody, ModalFooter } from '../Modal.styled';
import Button from '../../Header/Button/Button';
import { GameContext } from '../../../contexts/GameContext';
import { ModalContext } from '../../../contexts/ModalContext';
import { SfxContext } from '../../../contexts/SFXContext';
import { useNavigate } from 'react-router-dom';


function RoundOverModal() {
  const { resetBoard, game, restartGame } = useContext(GameContext);
  const { hoverSfx, clickSfx } = useContext(SfxContext);
  const { handleModal } = useContext(ModalContext);

  const navigate = useNavigate();
  

  return (
    <>
      <ModalHeader>
        <Title $primary="true">
          {game.roundWinner
           ? `${game.roundWinner.name} Wins this round!`
            : 'Round drawn!'}
        </Title>
      </ModalHeader>

      <ModalBody>
        <Subtitle $primary="true">Would you like to play again?</Subtitle>
        <Subtitle $primary="true">{game.player1.name} : {game.player1.score}</Subtitle>
        <Subtitle $primary="true">{game.player2.name} : {game.player2.score}</Subtitle>
      </ModalBody>

      <ModalFooter>
        <Button color="blue" onClick={() => {
          clickSfx();
          handleModal();
          resetBoard();
          
        
        }}
        onMouseEnter={() => hoverSfx()}
        >
          Continue
        </Button>
        <Button color="grey" onClick={() => {
          clickSfx();
          navigate('/');
          restartGame();
          handleModal();
          
          
          
          
        }} onMouseEnter={() => hoverSfx()}>Restart</Button>
      </ModalFooter>
    </>
  );
}

export default RoundOverModal;*/


import React, { useContext } from 'react';
import { Title, Subtitle } from '../../../styles/General.styled';
import { ModalHeader, ModalBody, ModalFooter } from '../Modal.styled';
import Button from '../../Header/Button/Button';
import { GameContext } from '../../../contexts/GameContext';
import { ModalContext } from '../../../contexts/ModalContext';
import { SfxContext } from '../../../contexts/SFXContext';
import { useNavigate } from 'react-router-dom';


function RoundOverModal() {
  const { resetBoard, game, restartGame } = useContext(GameContext);
  const { hoverSfx, clickSfx } = useContext(SfxContext);
  const { handleModal } = useContext(ModalContext);

  const navigate = useNavigate();
  

  return (
    <>
      <ModalHeader>
        <Title primary>
          {game.roundWinner
           ? `${game.roundWinner.name} Wins this round!`
            : 'Round drawn!'}
        </Title>
      </ModalHeader>

      <ModalBody>
        <Subtitle primary>Would you like to play again?</Subtitle>
        <Subtitle primary>{game.player1.name} : {game.player1.score}</Subtitle>
        <Subtitle primary>{game.player2.name} : {game.player2.score}</Subtitle>
      </ModalBody>

      <ModalFooter>
        <Button color="blue" onClick={() => {
          clickSfx();
          handleModal();
          resetBoard();
          
        
        }}
        onMouseEnter={() => hoverSfx()}
        >
          Continue
        </Button>
        <Button color="grey" onClick={() => {
          clickSfx();
          navigate('/');
          restartGame();
          handleModal();
          
          
          
          
        }} onMouseEnter={() => hoverSfx()}>Restart</Button>
      </ModalFooter>
    </>
  );
}

export default RoundOverModal;

