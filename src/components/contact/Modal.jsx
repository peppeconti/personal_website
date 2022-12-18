import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.scss';

const Backdrop = ({ setModalOpen, resetMessage, unLockScroll }) => {
    return (
        <div
            className={classes.back}
            onClick={() => {
                setModalOpen(false);
                unLockScroll();
                resetMessage('');
            }}

        />
    );
};

const Message = ({ message }) => {

    return (
        <div className={classes.message}>
            <p className={classes.confirm}>
                {message ? message : '...wait...'}
            </p>
        </div>
    );
};

const portalElement = document.getElementById('overlay');

const Modal = ({ setModalOpen, message, resetMessage, unLockScroll }) => {

    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop setModalOpen={setModalOpen} resetMessage={resetMessage} unLockScroll={unLockScroll} />, portalElement)}
            {ReactDOM.createPortal(<Message message={message} />, portalElement)}
        </Fragment>
    );
};

export default Modal;