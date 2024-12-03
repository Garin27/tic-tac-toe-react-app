



import React, { useContext } from 'react';
import { CellStyle } from './GameCell.styled';
import { GameContext } from '../../contexts/GameContext';
import { ModalContext } from '../../contexts/ModalContext';
import RoundOverModal from '../Modal/RoundOverModal/RoundOverModal';
import { checkForWinner } from '../../utils/GameUtils';
import { ReactComponent as IconX } from '../../assets/svgs/Letter-X.svg';
import { ReactComponent as IconO } from '../../assets/svgs/Letter-O.svg';

function GameCell({ cellItem, index }) {
    const { updateBoard, game, roundComplete } = useContext(GameContext);
    const { handleModal } = useContext(ModalContext);

    const cellClickHandler = () => {
        updateBoard(index);
        const result = checkForWinner(game.board);
        if (result) {
            roundComplete(result);
            handleModal(<RoundOverModal />);
        }
    };

    return (
        <CellStyle onClick={cellClickHandler}>
            {cellItem === 'X' && <IconX className='Xicon' />}
            {cellItem === 'O' && <IconO className='Oicon' />}
        </CellStyle>
    );
}

export default GameCell;