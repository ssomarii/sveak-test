import { Card } from '../../components/Card';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { MenuAdaptive } from '../../components/MenuAdaptive';
import { CARDS_MOCK, MENU_ITEMS_MOCK } from '../../constants/mocks';
import styles from './mainPage.module.scss';
import { useState } from 'react';

export const MainPage = () => {
    const [isActiveMenu, setIsActiveMenu] = useState(false);

    function _onClickButtonMenu() {
        setIsActiveMenu(!isActiveMenu);
    }
    
    return(
        <div className={styles.mainPage}>
            <div className={styles.mainPage__container}>
                <MenuAdaptive isActive={isActiveMenu} stylesWrap={styles.mainPage__menuAdaptiveWrapper} listItems={MENU_ITEMS_MOCK} />
                <Menu listItems={MENU_ITEMS_MOCK} stylesWrap={styles.mainPage__menuWrapper} />
                <div className={styles.mainPage__fullContent}>
                    <Header isActiveMenu={isActiveMenu} onClickButtonMenu={_onClickButtonMenu} />
                    <div className={styles.mainPage__content}>
                        {CARDS_MOCK.map(item => <Card key={item.id} title={item.title} />)}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}