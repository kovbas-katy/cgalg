import { text } from "stream/consumers";
import styles from "../../styles/content.module.css";
import KatexSpan from "./katex_span";
import Image from "next/image";
import graf from "../images/graf.png"
import { CodeBlock, CopyBlock } from "react-code-blocks";
import he from "he";


export default function Content(){

    return(
        <div className={styles.body}>
            <div className={styles.block_seq}>
                <div className={styles.block_seq_title}>Числовая последовательность</div>

                <div className={styles.block_seq_content}>

                    <h2 className={styles.block_seq_h2} style={{marginBottom:"10px"}}> Начальные значения </h2>
                    
                    
                    <div style={{display:"flex", paddingLeft: "25px"}}> 
                        <table className={styles.block_seq_table}>
                            <thead>
                                <tr>
                                    <td className={styles.block_seq_td}>n\m</td>
                                    {[...Array(6)].map( 
                                        (e, index) => <td className={styles.block_seq_td}>{index}</td>
                                    )}
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td className={styles.block_seq_td}>0</td>
                                    {[1,0,0,0,0,0].map( 
                                        (e, index) => <td className={styles.block_seq_td}>{e}</td>
                                    )}
                                </tr>
                                <tr>
                                    <td className={styles.block_seq_td}>1</td>
                                    {[1,1,0,0,0,0].map( 
                                        (e, index) => <td className={styles.block_seq_td}>{e}</td>
                                    )}
                                </tr>
                                <tr>
                                    <td className={styles.block_seq_td}>2</td>
                                    {[1,2,1,0,0,0].map( 
                                        (e, index) => <td className={styles.block_seq_td}>{e}</td>
                                    )}
                                </tr>
                                <tr>
                                    <td className={styles.block_seq_td}>3</td>
                                    {[1,3,3,1,0,0].map( 
                                        (e, index) => <td className={styles.block_seq_td}>{e}</td>
                                    )}
                                </tr>
                                <tr>
                                    <td className={styles.block_seq_td}>4</td>
                                    {[1,4,6,4,1,0].map( 
                                        (e, index) => <td className={styles.block_seq_td}>{e}</td>
                                    )}
                                </tr>
                                <tr>
                                    <td className={styles.block_seq_td}>5</td>
                                    {[1,5,10,10,5,1].map( 
                                        (e, index) => <td className={styles.block_seq_td}>{e}</td>
                                    )}
                                    
                                </tr>
                            </tbody>
                            
                        </table>
                        <div style={{flex:10}}/>
                    </div>

                    <p className={styles.block_seq_p} style={{marginTop:"20px", paddingLeft:"25px"}}>
                        Значения {"a(n)"} также известны как биномиальный коэффициент
                    </p>
                    <p className={styles.block_seq_p} style={{paddingLeft: "25px"}}> 
                        Значения {"a(n)"} зависят от 2 параметров n
                        
                    </p>

                    <h2 className={styles.block_seq_h2}> Основные формулы </h2>

                    <ul>
                        <li>
                            <p className={styles.block_seq_p} style={{textDecoration: "none", marginTop: "none"}}>
                                Явная формула:
                            </p>

                            <div className={styles.block_seq_form}>
                                <KatexSpan text="$C\left( n,k \right) = binomial\left( n,k \right)=n !/\left( k! \ast \left( n-k \right)! \right), 0 \leqslant k\leqslant n$"/>
                            </div>
                        </li>
                        <li>
                            <p className={styles.block_seq_p}>
                                Рекуррентная формула: 
                            </p>

                            <div className={styles.block_seq_form}>
                                <KatexSpan text="$\mathrm{C}_{m}^{n} = \mathrm{C}_{m-1}^{n} + \mathrm{C}_{m-1}^{n-1}$"/>
                            </div>
                        </li>
                        <li>
                            <p className={styles.block_seq_p}>
                                Иная формула: 
                            </p>

                            <div className={styles.block_seq_form}>
                                <KatexSpan text="$Отсутствует$"/>
                            </div>
                            
                        </li>
                        <li>
                            <p className={styles.block_seq_p}>
                                Производящая функция: 
                            </p>

                            <div className={styles.block_seq_form}>
                                <KatexSpan text="$G(x)= \left( 1+x \right)^{n} = Sum_{k=0..n}C\left( n,k \right)\ast x^{k}$"/>
                            </div>
                        </li>

                        <div style={{height: '15px'}}/>

                    </ul>
                    
                </div>
                
            </div>

            <div className={styles.block_seq} style={{marginTop: '50px'}}>

                <div className={styles.block_seq_title}>КОМБИНАТОРНАЯ ИНТЕРПРЕТАЦИЯ</div>

                <div className={styles.block_seq_content}>

                    <p className={styles.block_seq_p} style={{marginTop: "12px"}}> 
                        Значения {"a(n)"} определяет количество n элементов
                        <br/>  
                    </p>
                    
                    <p className={styles.block_seq_p}> 
                        Определение интерпретации: Сочетание элементов из {"Е={a1,a2,…,an}"} по m называется упорядоченное подмножество из m элементов, 
                        принадлежащих Е и отличающихся друг от друга составом, но не порядком элементов

                    </p>
                    <p className={styles.block_seq_p}> 
                        Пример:
                    </p>
                    <div className={styles.block_seq_form}>
                        <KatexSpan text="$\cdot x\_r \mathrm{C}_{4}$"/>
                    </div>
                    <p style = {{margin:"0" , paddingLeft: "10px", marginBottom: "10px"}}>
                        Где E = {"{1,2,3,4}"}
                        <br/>
                        1,2 <br/>
                        1,3 <br/>
                        1,4 <br/>
                        2,3 <br/>
                        2,4 <br/>
                        3,4 <br/>
                    </p>
                    
                </div>
                
            </div>
            
            <div className={styles.block_row}>
                <div className={styles.block_row_calc}>
                    <p className={styles.block_row_calc_title}>Алгоритм комбиНаторной генерации</p>
                     
                    <select className={styles.block_row_calc_input}>
                        
                        <option>Rank</option>
                        <option>Unrank</option>
                        <option>Listting</option>
                        
                    </select>

                    <div style={{display:"flex", flexDirection:"row", justifyContent:"center", gap:"10px"}}>
                        <div className={styles.block_row_calc_lable}>N = </div>
                        <input className={styles.block_row_calc_small_input}/>
                        <div className={styles.block_row_calc_lable}>M =</div>
                        <input className={styles.block_row_calc_small_input}/>
                    </div>
                    <p className={styles.block_row_calc_title} style={{marginBottom:"10px"}}>Комбинаторный объект</p>
                    <input className={styles.block_row_calc_input} style={{height:"28px",marginBottom:"30px"}}/>
                    <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
                        <div className={styles.block_row_calc_button}>Вычислить</div>
                    </div>
                    <div className={styles.block_row_calc_text}>
                    &#8192; Не следует, однако забывать, что укрепление и развитие структуры позволяет оценить значение существенных финансовых и административных условий. 
                    Равным образом реализация намеченных плановых заданий в значительной степени обуславливает создание форм развития. 
                    Равным образом начало повседневной работы по формированию позиции позволяет выполнять важные задания по разработке существенных финансовых и административных условий. 
                    Таким образом новая модель организационной деятельности в значительной степени обуславливает создание существенных финансовых и административных условий. 
                    Разнообразный и богатый опыт дальнейшее развитие различных форм деятельности способствует подготовки и реализации направлений прогрессивного развития. 
                    Значимость этих проблем настолько очевидна, что консультация с широким активом требуют от нас анализа направлений прогрессивного развития. 
                    </div>

                </div>

                <div className={styles.block_seq} style={{flex:1,marginTop:0, maxHeight: '700px', overflowY: 'scroll'}}>
                    <div className={styles.block_seq_title} style={{fontSize: "14px"}}>Описание алгоритма</div>
                    <div className={styles.block_seq_content}>

                        <p className={styles.block_seq_p} style={{marginTop:"18px",marginBottom:"10px"}}> 
                            Количество параметров: 2
                            <br/>Наименование параметров: n,k
                        </p>

                    </div>

                    <div className={styles.block_seq_title} style={{fontSize: "14px"}}>Формула мощности</div>
                    <div className={styles.block_seq_content} style={{marginTop:"18px", marginBottom:"12px"}}>

                        <KatexSpan text="$F_{n}=F_{n-1}+F_{n-2}$"/>

                    </div>

                    <div className={styles.block_seq_title} style={{fontSize: "14px"}}>Структура дерева и/или</div>
                    <div className={styles.block_seq_content}>

                        <Image
                            height={300}
                            src={graf}
                            alt="graf"
                            style={{marginLeft: '40px', alignSelf:"center",marginBottom:"20px",marginTop:"20px"}}
                        />

                    </div>

                    <div className={styles.block_seq_title} style={{fontSize: "14px"}}>Псевдокод алгоритма</div>
                    <div className={styles.block_seq_content}>

                        {/* <p className={styles.block_seq_p} style={{marginTop:"18px"}}> 
                            Код
                        </p> */}

                        <div style={{marginBottom: "20px",marginTop:"18px"}}>
                            <CodeBlock
                                language="python"
                                text={he.decode(
                                `algorithm RankCombination (V,k,n,m)
begin
if m=0 then return 0; {добрались до листа}
if m=n then return 0; {добрались до листа}
if V[k]=0 then {движение по левой ветви}
return RankCombination (V,k+1,m-1,n-1);
else {движение по правой ветви}
    return RankCombination (V,k+1,m-1,n-1)+
begin {иначе правая ветвь}
FibonacciGenerate(num<F(-1),n-2);
v<-1 {или Print("b")}
end
end`
                                )}
                                showLineNumbers
                                
                            />
                        </div>

                    </div>

                    <div className={styles.block_seq_title} style={{fontSize: "14px"}}>Источники информации</div>
                    <div className={styles.block_seq_content}>

                        <p className={styles.block_seq_p} style={{marginTop:"18px"}}> 
                            Источники/ссылки
                        </p>

                    </div>
                </div>
               

            </div>
        </div>

        
    )
}