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
                    <Link className={style.btnLink} to='contact' offset={-250} smooth={true} duration-500>
                        <span className={style.linkText}>Contact</span>
                    </Link>
                </button>
                <button className={style.button}>
                    <Link className={style.btnLink} to='projects' offset={-250} smooth={true} duration-500>
                        <span className={style.linkText}>Projects</span>
                    </Link></button>
                <button className={style.button}>
                    <Link className={style.btnLink} to='experience' offset={-250} smooth={true} duration-500>
                        <span className={style.linkText}>Experience</span>
                    </Link>
                </button>
                <button className={style.button}>
                    <Link className={style.btnLink} to='about' offset={-400} smooth={true} duration-500>
                        <span className={style.linkText}>About</span>
                    </Link>
                </button>
            </div>
            
        </div>
    );
}