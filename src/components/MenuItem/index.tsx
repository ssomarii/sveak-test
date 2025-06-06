import styles from './menuItem.module.scss';

interface IProps {
    title: string;
}

export const MenuItem = ({title = ''}: IProps) => {
    return(
        <div className={styles.menuItem}>
            <span className={styles.menuItem__title}>
                {title}
            </span>
        </div>
    )
}