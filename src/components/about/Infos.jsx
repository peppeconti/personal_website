import classes from './Infos.module.scss';

const Infos = () => {

    return (
        <article className={classes.infos}>
            <h1>About me</h1>
            <p>I started programming when I was eight writing beautiful "spaghetti code" with my C64 to solve math problems involving hexagonal gardens with round flowerbeds. There was no Internet then, state TV only broadcast three channels, and video games were portrayed as evil. Nerd culture wasn't inflated and Sheldon Cooper hadn't dethroned the Fonzie. So I had to wait several years to devote myself to programming again, replacing the old Commodore with a Laptop and abandoning Basic for JavaScript. Meanwhile I played the saxophone, studied philosophy and musicology, all of that living and working between Germany and Italy. Let's hope that's enough.</p>
        </article>
    );
}

export default Infos;