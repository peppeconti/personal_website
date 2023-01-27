import { Fragment, useRef } from 'react';
import classes from './Project.module.scss';
import { motion as m, useScroll, useTransform } from 'framer-motion';
import github from '../../assets/github__repository.svg';
//import link from '../../assets/link-icon.svg';

const Project = ({ title, subtitle, logo, font, description, url, repository, keywords }) => {

    const scrollRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ['start end', '200% 100%']
    });

    const openRight = useTransform(
        scrollYProgress,
        [0, 1],
        ['-50%', '0%'] // [-50%, 0%]
    );

    const openLeft = useTransform(
        scrollYProgress,
        [0, 1],
        ['50%', '0%'] // [50%, 0%]
    );

    const keywordsList = keywords.map((e, i) => <a key={i} href={`https://github.com/topics/${e}`} target='_blank' rel='noreferrer' className={classes.keyword}><span>{e}</span></a>);

    const titleStyle = {
        fontSize: title.size,
        fontFamily: font
    }

    const subtitleStyle = {
        fontSize: subtitle.size,
        fontFamily: font
    }


    return (
        <Fragment>
            <div className={classes.title}>
                <h3 style={titleStyle}>{title.text}</h3>
                <span className={classes.logo}><img src={logo} alt={title.text} /></span>
            </div>
            <article ref={scrollRef} className={classes.project}>
                <div className={classes.extension} />
                <m.div style={{ x: openLeft }} viewport={{ root: scrollRef }} className={classes.description}>
                    <figure className={classes.repository}>
                        <a href={repository} target='_blank' rel='noreferrer'>
                            <img width={30} height={30} src={github} alt='github repository' />
                        </a>
                    </figure>
                    <div>
                        <p className={classes.text__description}>{description}</p>
                        <p className={classes.keywords}>{keywordsList}</p>
                    </div>
                </m.div>
                <m.a href={url} target='_blank' style={{ x: openRight }} viewport={{ root: scrollRef }} className={classes.name}>
                    <div className={classes.title}>
                        <span className={classes.logo}><img src={logo} alt={title.text} /></span>
                        <h3 style={titleStyle}>{title.text}</h3>
                        <h4 style={subtitleStyle}>{subtitle.text}</h4>
                    </div>
                </m.a>
            </article>
        </Fragment>
    );
}

export default Project;

// <span><img src={link} /></span>