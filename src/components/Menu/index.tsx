import { MenuItem } from '../MenuItem';
import styles from './menu.module.scss';

interface IProps {
    stylesWrap?: string;
}

export const Menu = ({stylesWrap = ''}: IProps) => {
    return(
        <div className={`${styles.menu} ${stylesWrap}`}>
            <MenuItem title='1 пункт меню' />
            <MenuItem title='2 пункт меню' />
            <MenuItem title='3 пункт меню' />
        </div>
    )
}