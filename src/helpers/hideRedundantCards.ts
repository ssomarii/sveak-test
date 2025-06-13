export function hideRedundantCards(cardsList: any[]) {
    const gridContainer = document.querySelector('[data-grid-container]');
    const gridStyles = getComputedStyle(gridContainer!);
    const columnsCount = gridStyles.gridTemplateColumns.split(' ').length;
    
    let redundantCardsCount = cardsList.length % columnsCount;
    let allItems = Array.from(document.querySelectorAll('[data-grid-card]'));     
    let redundantCards = allItems.slice(cardsList.length - redundantCardsCount)

    allItems.forEach((el: any) => {
        el.style.removeProperty('--colorProp');
    })

    redundantCards.forEach((el: any) => {
        el.style.setProperty('--colorProp', 'blue');
        document.documentElement.style.setProperty('--columnCountProp', String(columnsCount));
    })
}