import styles from './products.module.css';

export default function Products(){

    return<>
        <div className={styles.productsContainer}>
            <div className={styles.products}>
                <img src={require('../../resources/pinkMilkBox.jpg')} alt="logo" className={styles.logoImage} />   
                <p>Product1</p>
                <p>Price</p>
                <input className={styles.buttonAddToCart} type="button" value="Add to cart" />
            </div>
            <div className={styles.products}>
                <img src={require('../../resources/blueMilkBox.jpg')} alt="logo" className={styles.logoImage} />   
                <p>Product1</p>
                <p>Price</p>
                <input className={styles.buttonAddToCart} type="button" value="Add to cart" />
            </div>

            <div className={styles.products}>
                <img src={require('../../resources/pinkMilkBox.jpg')} alt="logo" className={styles.logoImage} />   
                <p>Product1</p>
                <p>Price</p>
                <input className={styles.buttonAddToCart} type="button" value="Add to cart" />
            </div>
            <div className={styles.products}>
                <img src={require('../../resources/blueMilkBox.jpg')} alt="logo" className={styles.logoImage} />   
                <p>Product1</p>
                <p>Price</p>
                <input className={styles.buttonAddToCart} type="button" value="Add to cart" />
            </div>
        </div>
    </>

}