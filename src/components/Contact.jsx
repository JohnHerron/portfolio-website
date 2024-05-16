import style from "./contact.module.css";

export default function Contact() {
    return (
        <form name="contact" className={style.customForm}>
            <h3>Contact Me</h3>
            <div className={style.inputBlock}>
                <input placeholder="Name" name="name"/>
                <input placeholder="example@domain.com" type="email" name="email"/>
                <textarea placeholder="Message" rows={10} name="message"></textarea>
            </div>
            <button type="submit" className={style.formButton}>Send</button>
        </form>
    );
}