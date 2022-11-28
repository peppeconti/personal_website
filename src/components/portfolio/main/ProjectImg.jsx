import classes from './ProjectImg.module.scss';
import connect_4 from '../../../assets/connect-4.jpg';

const ProfileImg = () => {

    return (
        <div className={classes.profile__img}>
            <img src={connect_4} alt='connect four' />
        </div>
    );
}

export default ProfileImg;