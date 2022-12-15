import styles from './menu.module.css';

export default function Menu() {
    return <>
        <div id={styles.menu}>  
            <div  className={styles.menuButton}>
                <h1>SHOP</h1>
            </div>
            <div  className={styles.menuButton}>
                <h1>ABOUT US</h1>
            </div>
            <div  className={styles.menuButton}>
                <h1>CONTACT US</h1>
            </div>
            
        </div> 
    </>

};