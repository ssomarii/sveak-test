import styles from './card.module.scss';

interface IProps {
    title: string;
    image: string;
}

export const Card = ({title = 'default', image = ''}: IProps) => {
    return(
        <div className={styles.card}>
            <img src={image} className={styles.card__image} />
            <div className={styles.card__contentField}>
                <span className={styles.card__contentText}>{title}</span>
            </div>
        </div>
    )
}