import styles from './menuItem.module.scss';
import DeerImage from '../../assets/svg/deer.svg';

interface IProps {
    title: string;
}

export const MenuItem = ({title = ''}: IProps) => {
    return(
        <div className={styles.menuItem}>
            <img src={DeerImage} alt="deer" width="20" height="20" />
            <span className={styles.menuItem__title}>
                {title}
            </span>
        </div>
    )
}