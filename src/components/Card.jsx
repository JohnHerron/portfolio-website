import style from "./card.module.css";

const Card = ({title, company, info}) => {
    return (
        <div className={style.card}>
            <div className={style.title}>{title}</div>
            <div className={style.company}>{company}</div>
            <div className={style.info}>{info}</div>
        </div>
    );
}

export default Card;