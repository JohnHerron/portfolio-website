import style from "./pageContainer.module.css";

export default function PageContainer({children}) {
    return <div className={style.pageContainer}>{children}</div>;
}