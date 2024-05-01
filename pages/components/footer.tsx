import styles from "../../styles/footer.module.css";

export default function Footer(){
    return(
        <div className={styles.footer}>
            <p>
                Последнее обновление 31.02.2024
                <br/> License Agreements, Terms of Use, Privacy Policy..
            </p>
        </div>
    )

}