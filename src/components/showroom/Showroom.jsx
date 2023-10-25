import { useState } from 'react';
import classes from './Showroom.module.scss';
import { data as projects } from '../../utils/projects';
import Project from './Project';
import Buttons from './Buttons';

const Showroom = () => {

    const [arrayItems, setArrayItems] = useState(3);
    
    return (
        <section id='showroom' className={classes.showroom}>
            <div className={classes.projects__wrapper}>
                {projects.slice(0, arrayItems).map(e => <Project
                    key={e.id}
                    title={e.title}
                    subtitle={e.subtitle}
                    font={e.font}
                    logo={e.logo}
                    description={e.description}
                    keywords={e.keywords}
                    url={e.url}
                    repository={e.repository}
                />)}
            </div>
            <Buttons more={arrayItems < projects.length} less={arrayItems > 3} setArrayItems={setArrayItems}/>
        </section>
    );
}

export default Showroom;