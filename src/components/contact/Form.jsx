import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import classes from './Form.module.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useScrollLock } from '../../hooks/useScrollLock';
import Modal from './Modal';

const ContactForm = () => {

    const form = useRef();

    const { lockScroll, unlockScroll } = useScrollLock();

    const [modalOpen, setModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const sendEmail = () => {

        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_USER_ID)
            .then((result) => {
                setModalMessage('Your message was successfully sent!');
                console.log(result.text);
            }, (error) => {
                setModalMessage('An error occurred, try again');
                console.log(error.text);
            });
    };

    return (
        <div className={classes.wrapper}>
            <h1>Contact me</h1>
            <Formik
                initialValues={{ user_email: '', user_name: '', subject: '', message: '', }}
                validate={values => {
                    const errors = {};
                    if (!values.user_email) {
                        errors.user_email = 'please insert a valid email';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.user_email)
                    ) {
                        errors.user_email = 'invalid email address';
                    }
                    if (!values.message) {
                        errors.message = 'please insert your message';
                    }
                    return errors;
                }}
                onSubmit={(_, { resetForm }) => {
                    resetForm();
                    setModalOpen(true);
                    lockScroll();
                    setTimeout(() => {
                        sendEmail();
                    }, 2000);
                }}
            >
                {({
                    isSubmitting
                }) => (
                    <Form ref={form} className={classes.form}>
                        <div className={classes.row}>
                            <div className={classes.input}>
                                <Field className={classes.text} type="text" name="user_name" placeholder='your name' />
                                <ErrorMessage className={classes.err} name="user_name" component='div' />
                            </div>
                            <div className={classes.input}>
                                <Field className={classes.text} type="email" name="user_email" placeholder='your@email.com' />
                                <ErrorMessage className={classes.err} name="user_email" component='div' />
                            </div>
                        </div>
                        <div className={classes.input}>
                            <Field className={classes.text} type="text" name="subject" placeholder='subject' />
                        </div>
                        <div className={classes.input}>
                            <Field className={classes.message} as='textarea' type="text" name="message" placeholder='your message' />
                            <ErrorMessage className={classes.err} name="message" component='div' />
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
            {modalOpen && <Modal setModalOpen={setModalOpen} message={modalMessage} resetMessage={setModalMessage} unLockScroll={unlockScroll} />}
        </div>
    );
}

export default ContactForm;