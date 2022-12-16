import classes from './Contact.module.scss';
import Form from './Form';
import Footer from './Footer';

const Contact = () => {

  return (
    <section className={classes.contact}>
      <Form />
    </section>
  );
}

export default Contact;