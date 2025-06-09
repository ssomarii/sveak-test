import { Card } from '../../components/Card';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { CARDS_MOCK, MENU_ITEMS_MOCK } from '../../constants/mocks';
import styles from './mainPage.module.scss';

export const MainPage = () => {
    return(
        <div className={styles.mainPage}>
            <div className={styles.mainPage__container}>
                <Menu listItems={MENU_ITEMS_MOCK} stylesWrap={styles.mainPage__menuWrapper} />
                <div className={styles.mainPage__fullContent}>
                    <Header />
                    <div className={styles.mainPage__content}>
                        {CARDS_MOCK.map(item => <Card key={item.id} title={item.title} />)}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}