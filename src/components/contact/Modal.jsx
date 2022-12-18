import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.scss';
import { motion as m } from 'framer-motion';

const Backdrop = ({setModalOpen}) => {
    return (
        <m.div
            className={classes.back}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: .5 }}
            onClick={() => setModalOpen(false)}

        />
    );
};

const Message = () => {

    return (
        <div className={classes.message}>
            <p className={classes.confirm}>Your message was successfully sent!</p>
        </div>
    );
};

const portalElement = document.getElementById('overlay');

const Modal = ({setModalOpen}) => {

    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop setModalOpen={setModalOpen} />, portalElement)}
            {ReactDOM.createPortal(<Message />, portalElement)}
        </Fragment>
    );
};

export default Modal;