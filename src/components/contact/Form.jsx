import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import classes from './Form.module.scss';

const Form = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_USER_ID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail} className={classes.form}>
            <div>
                <div className={classes.group}>
                    <label htmlFor='user_name'>Name</label>
                    <input type='text' name='user_name' />
                </div>
                <div className={classes.group}>
                    <label htmlFor='user_email'>Email</label>
                    <input type='email' name='user_email' />
                </div>
            </div>
            <div className={classes.group}>
                <label htmlFor='message'>Message</label>
                <textarea name='message' />
            </div>
            <div className={classes.group}>
                <button type='submit'>Submit</button>
            </div>
        </form>

    );
}

export default Form;