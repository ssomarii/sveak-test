import styles from './menuItem.module.scss';
import DeerImage from '../../assets/svg/deer.svg';

interface IProps {
    title: string;
}

export const MenuItem = ({title = ''}: IProps) => {
    return(
        <div className={styles.menuItem}>
            <img src={DeerImage} alt="deer" width="20" height="20" />
            <h3 className={styles.menuItem__title}>
                {title}
            </h3>
        </div>
    )
}