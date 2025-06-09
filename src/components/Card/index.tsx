import styles from './card.module.scss';

interface IProps {
    title: string;
}

export const Card = ({title = 'default'}: IProps) => {
    return(
        <div className={styles.card}>
            <span>{title}</span>
        </div>
    )
}