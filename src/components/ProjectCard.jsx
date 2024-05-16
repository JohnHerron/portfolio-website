import style from "./card.module.css";

const Card = ({title, img, link}) => {
    return (
        <div className={style.projectCardContainer}>
            <div className={style.projectCard} style={{backgroundImage: `url(${img})`}}>
                <div className={style.projectTitle}>{title}</div>
            </div>
            <a 
                className={style.link}
                target="_blank" 
                rel="noopener noreferrer"
                href={link}
            >
                See Here
            </a>
        </div>
    );
}

export default Card;