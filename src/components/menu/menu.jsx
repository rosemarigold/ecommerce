import styles from './menu.module.css';
import { NavLink } from 'react-router-dom';

export default function Menu() {
    return <>
        <div id={styles.menu}>  
            <div  className={styles.menuButton}>
                <NavLink to="/">
                    <h1>HOME</h1>
                </NavLink>
            </div>
            <div  className={styles.menuButton}>
                <NavLink to="/AboutUs">
                    <h1>ABOUT US</h1>
                </NavLink>
            </div>
            <div  className={styles.menuButton}>
                <NavLink to="/ContactUs">
                    <h1>CONTACT US</h1>
                </NavLink>
            </div>
        </div> 
    </>
};