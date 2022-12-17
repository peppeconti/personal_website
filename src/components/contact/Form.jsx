import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import classes from './Form.module.scss';
import Input from './Input';

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
        <div className={classes.wrapper}>
            <h1>Contact</h1>
            <form ref={form} onSubmit={sendEmail} className={classes.form}>
                <Input placeholder='your name' name='user_name'/>
                <Input placeholder='your@email.com'  name='user_email'/>
                <Input placeholder='your message' name='message' type='textarea'/>
                <button type='submit'>SEND</button>
            </form>
        </div>
    );
}

export default Form;