import styles from './menu.module.css';
import { NavLink } from 'react-router-dom';

export default function Menu() {
    return <>
        <div id={styles.menu}>  
            <div  className={styles.menuButton}>
                <h1><NavLink to="/Home">Home</NavLink></h1>
            </div>
            <div  className={styles.menuButton}>
                <h1><NavLink to="/AboutUs">ABOUT US</NavLink></h1>
            </div>
            <div  className={styles.menuButton}>
                <h1><NavLink to="/ContactUs">CONTACT US</NavLink></h1>
            </div>
        </div> 
    </>
};