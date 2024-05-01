import Head from "next/head";
import IndexNavBar from "./components/index_navbar";
import Image from "next/image";
import logo from "./images/index-logo.png";
import styles from "../styles/index_page.module.css";
import { useRouter } from "next/router";
import { useState } from "react";

export async function getServerSideProps(context: any) {
   return {
    props: {
        user: ''
    }
   }
}

export default function Index({user}: any){
    const router = useRouter();
    const [search, setSearch] = useState('')

    return (
        <div className={styles.body}>
            <Head>
                <title>CGALGORITHMS</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            </Head>
            
            <IndexNavBar/>
            <div className={styles.content}>
                <Image
                    className={styles.logo}
                    width={475}
                    src={logo}
                    alt="logo"
                />
                <div className={styles.logoText}>Combinatorial Generation Algorithms</div>

                <div className={styles.inputBlock}>
                    <input 
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className={styles.inputBlockField}
                    />
                    <button 
                        className={styles.inputBlockButton}
                        onClick={() => router.push(`/algorithms/${search}`)}
                    >
                        НАЙТИ
                    </button>
                </div>
                <div className={styles.recentlySearch}>
                    {
                        [...Array(6)].map(
                            (e, index) => index == 5 ? <p>...</p> : <p>A000001</p>
                        )
                    }
                </div>
                
                <p className={styles.infoBlock}>
                    Онлайн-энциклопедия, содержащая систематизированную информацию о 
                    существующих алгоритмах комбинаторной генерации, их свойствах и имеющиеся ограничения применения
                </p>
                <div style={{flexGrow: 1, flex: 1}}></div>
                <div className={styles.infoBlcok2}>
                    <p>О команде</p>
                    <p>Помощь по сайту</p>
                </div>
                
            </div>
            <div className={styles.footer}>
                Последнее обновление 31.02.2024
            </div>
        </div>
    )
}
