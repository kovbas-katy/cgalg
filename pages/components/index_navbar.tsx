import {useState } from "react";
import styles from "../../styles/index_navbar.module.css";
import React from "react";


export default function IndexNavBar(){
    const [selected, setSelected] = useState(0);

    return(
        <div className={styles.navbar}>
            <div className={styles.emptyBlock}></div>
            <div className={styles.segmentedBlock}>
                <div 
                    className={`${styles.segmentedBlockItemRigth} ${selected == 0 ? styles.segmentedBlockItemSelected : ''}`}
                    onClick={() => setSelected(0)}
                >
                    RU
                </div>
                <div 
                    className={`${styles.segmentedBlockItemLeft} ${selected == 1 ? styles.segmentedBlockItemSelected : ''}`}
                    onClick={() => setSelected(1)}
                >
                    EN
                </div>
            </div>
        </div>
        
    )
}