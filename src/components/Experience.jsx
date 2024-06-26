import style from "./experience.module.css";
import Card from "./Card";
import SmallCard from "./SmallCard";


export default function Experience() {
    return (
        <div name="experience" className={style.experienceContainer}>
            <div className={style.cardContainer}>
                <h3>Work History</h3>
                <div className={style.cardCarousel}>
                    <Card 
                        title="Software Developer" 
                        company="Roaring Sky Inc." 
                        info="Maintained kotlin-based android app, including adding new features and keeping track of bugfixes. Added new features to production website."
                    />
                </div>
            </div>
            <div className={style.cardContainer}>
                <h3>Skills</h3>
                <div className={style.cardCarousel}>
                    <SmallCard skill="Python" img=".\python.png"/>
                    <SmallCard skill="React" img=".\react.png"/>
                    <SmallCard skill="C++" img=".\cpp.svg"/>
                    <SmallCard skill="Git" img=".\git.png"/>
                    <SmallCard skill="JavaScript" img=".\javascript.png"/>
                    <SmallCard skill="NextJS" img=".\nextjs.png"/>
                </div>
            </div>
        </div>
    );
}