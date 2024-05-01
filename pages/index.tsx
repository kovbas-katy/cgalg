import Head from "next/head";
import NavBar from "./components/navbar";
import styles from "../styles/index.module.css";
import Content from "./components/content";
import Footer from "./components/footer";

export async function getServerSideProps(context: any) {
   return {
    props: {
        user: ''
    }
   }
}

export default function Index({user}: any){
    return (
        <div className={styles.body}>
            <Head>
                <title>Проверка</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            </Head>

            <Content/>
            <Footer/>
            <NavBar/>
        </div>
    )
}
