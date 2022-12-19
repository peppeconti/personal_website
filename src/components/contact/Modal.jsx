import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.scss';
import { motion as m } from 'framer-motion';
import success from '../../assets/circle-check-solid.svg';
import error from '../../assets/triangle-exclamation-solid.svg';

const Backdrop = ({ closeModal }) => {
    return (
        <div className={classes.back} onClick={closeModal}/>
    );
};

const Message = ({ message, closeModal }) => {

    const rotate = {
        squareA: {
            x: [0, 35, 35, 0, 0],
            y: [0, 0, 35, 35, 0],
            scale: [.8, 1, .8, 1, .8],
            transition: {
                type: 'spring',
                duration: 1.5,
                repeat: Infinity
            }
        },
        squareB: {
            x: [0, -35, -35, 0, 0],
            y: [0, 0, -35, -35, 0],
            scale: [1, .8, 1, .8, 1],
            transition: {
                type: 'spring',
                duration: 1.5,
                repeat: Infinity
            }
        },
        squareC: {
            x: [0, 0, -35, -35, 0],
            y: [0, 35, 35, 0, 0],
            scale: [.8, 1, .8, 1, .8],
            transition: {
                type: 'spring',
                duration: 1.5,
                repeat: Infinity
            }
        },
        squareD: {
            x: [0, 0, 35, 35, 0],
            y: [0, -35, -35, 0, 0],
            scale: [1, .8, 1, .8, 1],
            transition: {
                type: 'spring',
                duration: 1.5,
                repeat: Infinity
            }
        }
    }

    const loader = <p className={classes.loader}>
        <m.span variants={rotate} animate='squareA' className={classes.squareA} />
        <m.span variants={rotate} animate='squareB' className={classes.squareB} />
        <m.span variants={rotate} animate='squareC' className={classes.squareC} />
        <m.span variants={rotate} animate='squareD' className={classes.squareD} />
    </p>

    const messageContainer = <Fragment>
        <p className={classes.message__header}>
            <img src={message && message.result === 'ok' ? success : error} alt={message && message.result === 'ok' ? 'success' : 'error'}/>
        </p>
        <p className={classes.message__body}>
            <span>{message && message.text}</span>
            <button onClick={closeModal}>Close</button>
        </p>
    </Fragment>

    return (
        <div className={classes.message}>
            {message ? messageContainer : loader}
        </div>
    );
};

const portalElement = document.getElementById('overlay');

const Modal = ({ setModalOpen, message, resetMessage, unLockScroll }) => {

    const closeModal = () => {
        setModalOpen(false);
        unLockScroll();
        resetMessage('');
    }

    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop closeModal={closeModal}/>, portalElement)}
            {ReactDOM.createPortal(<Message message={message} closeModal={closeModal}/>, portalElement)}
        </Fragment>
    );
};

export default Modal;