import clsx from 'clsx';
import styles from './burgerButton.module.scss';

interface IProps {
    isActive: boolean;
    onClickButton(): void;
}

export const BurgerButton = ({isActive = false, onClickButton = () => {}}: IProps) => {
    return(
    <button onClick={onClickButton} className={clsx(styles.burgerButton, isActive && styles.burgerButton_active)}>
        <div className={styles.burgerButton__burgerButtonItem} />
        <div className={styles.burgerButton__burgerButtonItem} />
        <div className={styles.burgerButton__burgerButtonItem} />
    </button>
    )
}