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
                    <Link className={style.btnLink} to='project' smooth={true} duration-500>
                        Project
                    </Link></button>
                <button className={style.button}>
                    <Link className={style.btnLink} to='experience' smooth={true} duration-500>
                        Experience
                    </Link>
                </button>
                <button className={style.button}>
                    <Link className={style.btnLink} to='about' smooth={true} duration-500>
                        About
                    </Link>
                </button>
            </div>
            
        </div>
    );
}