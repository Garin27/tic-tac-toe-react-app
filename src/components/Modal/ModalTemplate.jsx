import React, { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import ReactDOM from 'react-dom';
import { ModalBackdrop, ModalContainer } from './Modal.styled';

export function ModalTemplate() {
    const { handleModal, modalContent, modal } = useContext(ModalContext);

    if (modal) {
        return ReactDOM.createPortal(
            <ModalBackdrop>
                <ModalContainer>
                    {modalContent}
                    <button onClick={() => handleModal(false)}>Close</button>
                </ModalContainer>
            </ModalBackdrop>,
            document.getElementById('modal-root')
        );
    }
    return null;
}