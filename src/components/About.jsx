import style from "./about.module.css";

export default function About() {
    return (
        <div name="about" className={style.aboutContainer}>
            <div className={style.nameBlock}>
                <h3>My name is</h3>
                <h2>John <span className={style.lastName}>Herron</span></h2>
                <p>I am graduating with a Computer Science degree from California State University-Fullerton. My passions include gaming, training, and cooking.</p>
            </div>
            <img src="../../display.png"></img>
        </div>
    );
}