import type { TMenuItem } from '../../types';
import { MenuItem } from '../MenuItem';
import styles from './menu.module.scss';

interface IProps {
    stylesWrap?: string;
    listItems: TMenuItem[];
}

export const Menu = ({stylesWrap = '', listItems = []}: IProps) => {
    return(
        <nav className={`${styles.menu} ${stylesWrap}`}>
            {listItems.map(item => <MenuItem key={item.id} title={item.title} />)}
        </nav>
    )
}