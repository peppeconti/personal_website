import classes from './Main.module.scss';
import laptop from '../../assets/laptop.svg';

const Main = () => {

    return (
        <main className={classes.main}>
            <div>
                <div>
                    <h1>
                        <p>Giuseppe Conti</p>
                        <p>Web Developer</p>
                        <p>Milan</p>
                    </h1>
                    <h2>Front End Developer / Milan</h2>
                </div>
            </div>
            <figure>
                <img src={laptop} alt='laptop' />
            </figure>
        </main>
    );
}

export default Main;