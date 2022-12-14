import classes from './Link.module.scss';

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

    return (
        <a className={classes.anchor} href={target}>
            <li className={layout === 'round' ? [classes.link, classes.round].join(' ') : classes.link}>
                <div className={classListLeft}/>
                <div className={classListRight}/>
                <p>{letters}</p>
            </li>
        </a>
    );
}

export default Link;