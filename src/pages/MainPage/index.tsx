import {Card} from '../../components/Card';
import {Footer} from '../../components/Footer';
import {Header} from '../../components/Header';
import {CARDS_MOCK, MENU_ITEMS_MOCK} from '../../constants/mocks';
import {hideRedundantCards} from '../../helpers/hideRedundantCards';
import styles from './mainPage.module.scss';
import {useEffect, useState} from 'react';
import {BurgerButton} from "../../components/BurgerButon";
import {Menu} from "../../components/Menu";

export const MainPage = () => {
    const [isActiveMenu, setIsActiveMenu] = useState(false);

    function _onClickButtonMenu() {
        setIsActiveMenu(!isActiveMenu);
    }

    useEffect(() => {
        hideRedundantCards(CARDS_MOCK);
        window.addEventListener('resize', () => hideRedundantCards(CARDS_MOCK));

        return () => {
            window.removeEventListener('resize', () => hideRedundantCards(CARDS_MOCK));
        };
    }, []);

    return (
        <div className={styles.mainPage}>
            <div className={styles.mainPage__container}>
                <BurgerButton isActive={isActiveMenu} onClickButton={_onClickButtonMenu}/>
                <Menu isActive={isActiveMenu} stylesWrap={styles.mainPage__menuAdaptiveWrapper}
                      listItems={MENU_ITEMS_MOCK}/>
                <div className={styles.mainPage__fullContent}>
                    <Header/>
                    <main data-grid-container className={styles.mainPage__content}>
                        {CARDS_MOCK.map(item => <Card imageSmall={item.imageSmall}
                                                      stylesWrap={styles.mainPage__contentItem} key={item.id}
                                                      title={item.title} image={item.image}/>)}
                    </main>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
