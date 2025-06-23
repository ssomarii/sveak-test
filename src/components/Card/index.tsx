import clsx from 'clsx';
import styles from './card.module.scss';

interface IProps {
    title: string;
    image: string;
    imageSmall: string;
    stylesWrap?: string;
}

export const Card = ({title = 'default', image = '', stylesWrap = '', imageSmall = ''}: IProps) => {
    return (
        <div data-grid-card className={clsx(styles.card, stylesWrap)}>
            <picture>
                <source srcSet={image} media={"(min-width: 576px)"}/>
                <img src={imageSmall} className={styles.card__image}/>
            </picture>
            <div className={styles.card__contentField}>
                <span className={styles.card__contentText}>{title}</span>
            </div>
        </div>
    )
}
