import style from "./card.module.css";

const SmallCard = ({skill, img}) => {
    return (
        <div className={style.smallCard}>
            <div className={style.skill}>{skill}</div>
            <div className={style.imgContainer}>
                <img className={style.image} src={img} />
            </div>
        </div>
    );
}

export default SmallCard;