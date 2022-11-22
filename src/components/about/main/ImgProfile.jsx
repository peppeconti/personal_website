import classes from './ImgProfile.module.scss';
import photo from '../../../assets/profil.svg'

const ImgProfile = () => {

    return (
        <aside className={classes.aside}>
            <figure className={classes.img__profile}>
                <img src={photo} alt="profile" />
            </figure>
            <ul className={classes.hobbies}>
                <h2><span>Hobbies</span></h2>
                <li>cckckk</li>
                <li>jfjfjfj</li>
            </ul>
        </aside>
    );
}

export default ImgProfile;