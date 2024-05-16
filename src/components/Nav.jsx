import style from "./nav.module.css";
import {Link} from 'react-scroll';

export default function Nav() {
    return (
        <div className={style.nav}>
            <div className={style.helloContainer}>
                <img className={style.headshot} src="../../headshot.png"/>
                <h1 className={style.name}>John Herron</h1>
            </div>
            <div className={style.btnContainer}>
                <button className={style.button}>
                    <Link className={style.btnLink} to='projects' offset={-250} smooth={true} duration-500>
                        Projects
                    </Link></button>
                <button className={style.button}>
                    <Link className={style.btnLink} to='experience' offset={-250} smooth={true} duration-500>
                        Experience
                    </Link>
                </button>
                <button className={style.button}>
                    <Link className={style.btnLink} to='about' offset={-400} smooth={true} duration-500>
                        About
                    </Link>
                </button>
            </div>
            
        </div>
    );
}