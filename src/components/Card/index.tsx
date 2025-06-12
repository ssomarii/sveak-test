import clsx from 'clsx';
import styles from './card.module.scss';

interface IProps {
    title: string;
    image: string;
    stylesWrap?: string;
}

export const Card = ({title = 'default', image = '', stylesWrap = ''}: IProps) => {
    return(
        <div data-grid-card className={clsx(styles.card, stylesWrap)}>
            <img src={image} className={styles.card__image} />
            <div className={styles.card__contentField}>
                <span className={styles.card__contentText}>{title}</span>
            </div>
        </div>
    )
}