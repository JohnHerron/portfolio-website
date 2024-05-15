import style from "./about.module.css";

export default function About() {
    return (
        <div className={style.aboutContainer}>
            <div className={style.nameBlock}>
                <h2>My name is</h2>
                <h2>John Herron</h2>
                <p>about myself blah blah blah</p>
            </div>
            <img src="../../display.png"></img>
        </div>
    );
}