import styles from './logo.module.css';

export default function Logo() {
    return <>
        <div className={styles.logo}>  
            <h1>vanillacookiestar</h1>
            <img src={require('../../resources/logo.png')} alt="logo" className={styles.logoImage} />   
        </div>
    </>
}