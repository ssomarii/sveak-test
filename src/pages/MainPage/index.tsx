import { Card } from '../../components/Card';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { MenuAdaptive } from '../../components/MenuAdaptive';
import { CARDS_MOCK, MENU_ITEMS_MOCK } from '../../constants/mocks';
import styles from './mainPage.module.scss';
import { useEffect, useState } from 'react';

export const MainPage = () => {
    const [isActiveMenu, setIsActiveMenu] = useState(false);

    function _onClickButtonMenu() {
        setIsActiveMenu(!isActiveMenu);
    }
    
    
    function hideCards() {
        const gridContainer = document.querySelector('[data-grid-container]');
        const gridStyles = getComputedStyle(gridContainer!);
        const columnsCount = gridStyles.gridTemplateColumns.split(' ').length;
        
        let redundantCardsCount = CARDS_MOCK.length % columnsCount;
        let allItems = Array.from(document.querySelectorAll('[data-grid-card]'));     
        let redundantCards = allItems.slice(CARDS_MOCK.length - redundantCardsCount)

        allItems.forEach((el: any) => {
            el.style.removeProperty('--colorProp');
        })

        redundantCards.forEach((el: any) => {
            el.style.setProperty('--colorProp', 'blue');
            document.documentElement.style.setProperty('--columnCountProp', String(columnsCount));
        })
    }

    window.addEventListener('resize', () => {
        hideCards();
    })

    useEffect(() => {
        hideCards();
    }, []);
    
    return(
        <div className={styles.mainPage}>
            <div className={styles.mainPage__container}>
                <MenuAdaptive isActive={isActiveMenu} stylesWrap={styles.mainPage__menuAdaptiveWrapper} listItems={MENU_ITEMS_MOCK} />
                <Menu listItems={MENU_ITEMS_MOCK} stylesWrap={styles.mainPage__menuWrapper} />
                <div className={styles.mainPage__fullContent}>
                    <Header isActiveMenu={isActiveMenu} onClickButtonMenu={_onClickButtonMenu} />
                    <div data-grid-container className={styles.mainPage__content}>
                        {CARDS_MOCK.map(item => <Card stylesWrap={styles.mainPage__contentItem} key={item.id} title={item.title} image={item.image} />)}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}