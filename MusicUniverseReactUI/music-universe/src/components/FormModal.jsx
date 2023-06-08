import React from "react";
import Modal from 'react-modal';

export function FormModal({isOpen, content, closeModal}){
    const customStyles = {
        overlay:{
            background: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        content:{
            position: 'relative',
            top: '0',
            left: '0',
            background: 'none',
            border: 'none',
            width: '500px',
            height: '700px',
            margin: '0',
            padding: '0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
    };

    return (
        <Modal ariaHideApp={false} isOpen={isOpen} style={customStyles} onRequestClose={closeModal}>
            {content}
            <button id="modal-close-button" onClick={closeModal}>X</button>
        </Modal>
    )
}