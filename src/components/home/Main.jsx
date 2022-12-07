import classes from './Main.module.scss';
import laptop from '../../assets/laptop.svg';
import Motto from './Motto';
import Figure from './Figure';

const Main = () => {

    return (
        <main className={classes.main}>
            <Motto
                firstLine='Giuseppe Conti'
                secondLine='Web Developer'
                thirdLine='Milan'
                small='Front End Developer / Milan'
            />
            <Figure image={laptop} />
        </main>
    );
}

export default Main;