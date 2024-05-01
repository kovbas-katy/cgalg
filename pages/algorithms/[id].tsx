import { useRouter } from "next/router"

import Head from "next/head";
import NavBar from "./../components/navbar";
import styles from "../../styles/index.module.css";
import Content from "./../components/content";
import Footer from "./../components/footer";

export default function Algorithms(){
    const router = useRouter()
    return (
        <div className={styles.body}>
            <Head>
                <title>Алгоритм {router.query.id}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            </Head>

            <Content/>
            <Footer/>
            <NavBar/>
        </div>
    )
}