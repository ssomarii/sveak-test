import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import styles from './mainPage.module.scss';

export const MainPage = () => {
    return(
        <div className={styles.mainPage}>
            <div className={styles.mainPage__container}>
                <Menu />
                <div className={styles.mainPage__content}>
                    <Header />
                </div>
            </div>
            <Footer />
        </div>
    )
}