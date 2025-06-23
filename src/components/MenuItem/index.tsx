import styles from './menuItem.module.scss';
import DeerImage from '../../assets/svg/deer.svg';

interface IProps {
    title: string;
    link: string;
}

export const MenuItem = ({title = '', link = ''}: IProps) => {
    return (
        <div className={styles.menuItem}>
            <img src={DeerImage} alt="deer" width="20" height="20"/>
            <a href={link} className={styles.menuItem__title}>
                {title}
            </a>
        </div>
    )
}
