

import React, { useContext } from 'react';
import { Title, Subtitle } from '../../../styles/General.styled';
import { ModalHeader, ModalBody, ModalFooter } from '../Modal.styled';
import Button from '../../Header/Button/Button';
import { GameContext } from '../../../contexts/GameContext';
import { ModalContext } from '../../../contexts/ModalContext';

function RoundOverModal() {
  const { resetBoard, game } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);

  return (
    <>
      <ModalHeader>
        <Title $primary="true">
          {game.roundWinner
           ? `${game.roundWinner.name} Wins this round!`
            : 'Round drawn}!'}
        </Title>
      </ModalHeader>

      <ModalBody>
        <Subtitle $primary="true">Would you like to play again?</Subtitle>
        <Subtitle $primary="true">{game.player1.name} : {game.player1.score}</Subtitle>
        <Subtitle $primary="true">{game.player2.name} : {game.player2.score}</Subtitle>
      </ModalBody>

      <ModalFooter>
        <Button color="blue" onClick={() => {
          handleModal();
          resetBoard();
        }}>
          Restart
        </Button>
      </ModalFooter>
    </>
  );
}

export default RoundOverModal;