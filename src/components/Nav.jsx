import style from "./nav.module.css";

export default function Nav() {
    return (
        <div className={style.nav}>
            <div className={style.helloContainer}>
                    <img className={style.headshot} src="../../headshot.png"/>
                    <h1 className={style.name}>John Herron</h1>
            </div>
            <div className={style.btnContainer}>
                <button className={style.button}>Projects</button>
                <button className={style.button}>Experience</button>
                <button className={style.button}>About</button>
            </div>
            
        </div>
    );
}