import styles from "../../styles/navbar.module.css";
import Image from "next/image";
import logo from "../images/logo.png"

export default function NavBar(){
    return(
        <div className={styles.navbar}>
            <Image
                width={64}
                height={69}
                src={logo}
                alt="logo"
                style={{marginLeft: '40px'}}
            />
            <p className={styles.navbar_seq}>A007318</p>

            <select className={styles.navbar_com_select}>
                <option disabled selected>Комбинаторные интепретации</option>
                <option>{"C(n,k)"} = количество k-элементных подмножеств из n-элементного набора</option>
                <option> {"Binomial(n+k-1,n-1)"} - количество способов поместить k неразличимых шаров в n коробок</option>
                <option> {"Binomial(n+k-1,n-1)"} - число композиций (упорядоченных разбиений) из n с k слагаемыми</option>
                <option> {"Binomial(n+k-1,n-1)"} - число слабых композиций (упорядоченных слабых разбиений) из n ровно на k слагаемых</option>
                <option> {"Binomial(n,k)"} - число путей решетки от (0,0) до (n,k) с использованием шагов (1,0) и (1,1)</option>
                <option>{"Binomial(n+k-1,n-1)"} - количество стандартных таблиц формы (n,1^ k)</option>
                <option> Сочетание элементов из {"Е={a1,a2,…,an}"} по m</option>


            </select>

            <div className={styles.navbar_find_block}>
                <input 
                    className={styles.navbar_find_block_input} 
                    placeholder="Введите номер последовательности"
                />
                <div className={styles.navbar_find_block_button}>
                    Найти
                </div>
            </div>
        </div>
        
    )
}