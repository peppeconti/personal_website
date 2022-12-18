import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.scss';
import { motion as m } from 'framer-motion';

const Backdrop = ({setModalOpen, resetMessage}) => {
    return (
        <m.div
            className={classes.back}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: .5 }}
            onClick={() => {
                setModalOpen(false);
                resetMessage('');
            }}

        />
    );
};

const Message = ({message}) => {

    return (
        <div className={classes.message}>
            <p className={classes.confirm}>
                {message ? message : '...wait...'}
            </p>
        </div>
    );
};

const portalElement = document.getElementById('overlay');

const Modal = ({setModalOpen, message, resetMessage}) => {

    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop setModalOpen={setModalOpen} resetMessage={resetMessage} />, portalElement)}
            {ReactDOM.createPortal(<Message message={message} />, portalElement)}
        </Fragment>
    );
};

export default Modal;