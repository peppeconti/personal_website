import { useEffect } from 'react';
import classes from './Contact.module.scss';
import Form from './Form';
import { scrollIntoView } from "seamless-scroll-polyfill";

const Contact = () => {

  useEffect(() => {
    scrollIntoView(document.querySelector("#target"), { behavior: "smooth", block: "center", inline: "center" });
  },[]) 


  return (
    <section id='contact' className={classes.contact}>
      <Form />
    </section>
  );
}

export default Contact;