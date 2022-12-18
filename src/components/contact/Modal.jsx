import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.scss';
import { motion as m } from 'framer-motion';

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

    const rotate = {
        squareA: { 
            x: [0, 35, 35, 0, 0],
            y: [0, 0, 35, 35, 0],
            scale: [1, .8, 1, .8, 1],
            transition: {
                type: 'spring', 
                duration: 1.2,
                repeat: Infinity
            }
        },
        squareB: { 
            x: [0, -35, -35, 0, 0],
            y: [0, 0, -35, -35, 0],
            scale: [1, .8, 1, .8, 1],
            transition: {
                type: 'spring',
                duration: 1.2,
                repeat: Infinity
            }
        }
    }

    const loader = <p className={classes.loader}>
        <m.span variants={rotate} animate='squareA'  className={classes.squareA}/>
        <m.span variants={rotate} animate='squareB' className={classes.squareB}/>
    </p>

    return (
        <div className={classes.message}>
            <p className={classes.confirm}>
                {message ? message : loader}
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