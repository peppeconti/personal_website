import classes from './Infos.module.scss';

const Infos = () => {

    return (
        <article className={classes.infos}>
            <h1>About me</h1>
            <p>I started programming when I was 8 writing "spaghetti code" with my C64 to solve math problems involving square gardens with round flowerbeds. There was no internet then, state TV only broadcast three channels, and video games were portrayed as evil. So I had to wait several years to get back into programming (and here you can see the results).</p>
        </article>
    );
}

export default Infos;