import classes from './Link.module.scss';
import { motion as m } from 'framer-motion';

const Link = ({ target, text, layout }) => {

    const letters = Array.from(text).map((e, i) => i === 0 ? <span key={i} className={classes.first}>{e}</span> : <span key={i}>{e}</span>)

    let classListLeft = [classes.horizontal, classes.left].join(' ');
    let classListRight = [classes.horizontal, classes.right].join(' ');

    if (layout === 'round') {
        classListLeft = [classes.horizontal, classes.left, classes.round].join(' ');
        classListRight = [classes.horizontal, classes.right, classes.round].join(' ');
    };

    if (layout === 'vertical') {
        classListLeft = [classes.vertical, classes.top].join(' ');
        classListRight = [classes.vertical, classes.bottom].join(' ');
    };

    const opening = {
        hidden: {},
        visible: {}
    }

    const openLeft = {
        hidden: {opacity: 0, x: '100%'},
        visible: {
            opacity: 1,
            x: '0%',
            transition: {
                type: 'normal',
                ease: 'linear',
                duration: .2
            }
        }
    }

    const openRight = {
        hidden: {opacity: 0, x: '-100%'},
        visible: {
            opacity: 1,
            x: '0%',
            transition: {
                type: 'normal',
                ease: 'linear',
                duration: .2
            }
        }
    }

    const openTop = {
        hidden: {opacity: 0, y: '100%'},
        visible: {
            opacity: 1,
            y: '0%',
            transition: {
                type: 'normal',
                ease: 'linear',
                duration: .2
            }
        }
    }

    const openBottom = {
        hidden: {opacity: 0, y: '-100%'},
        visible: {
            opacity: 1,
            y: '0%',
            transition: {
                type: 'normal',
                ease: 'linear',
                duration: .2
            }
        }
    }

    return (
        <a className={classes.anchor} href={target}>
            <m.li variants={opening} className={layout === 'round' ? [classes.link, classes.round].join(' ') : classes.link}>
                <m.div variants={layout === 'vertical' ? openTop : openLeft} className={classListLeft}/>
                <m.div variants={layout === 'vertical' ? openBottom : openRight} className={classListRight}/>
                <p>{letters}</p>
            </m.li>
        </a>
    );
}

export default Link;