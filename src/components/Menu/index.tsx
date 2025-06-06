import { MenuItem } from '../MenuItem';
import styles from './menu.module.scss';

export const Menu = () => {
    return(
        <div className={styles.menu}>
            <MenuItem title='1 пункт меню' />
            <MenuItem title='2 пункт меню' />
            <MenuItem title='3 пункт меню' />
        </div>
    )
}