import clsx from "clsx";
import type { TMenuItem } from "../../types";
import { MenuItem } from "../MenuItem";
import styles from './menuAdaptive.module.scss';

interface IProps {
    stylesWrap?: string;
    listItems: TMenuItem[];
    isActive: boolean;
}

export const MenuAdaptive = ({stylesWrap = '', listItems = [], isActive = false}: IProps) => {
    return(
        <div className={clsx(styles.menuAdaptive, isActive && styles.menuAdaptive_active, stylesWrap)}>
            <div className={clsx(styles.menuAdaptive__menu, isActive && styles.menuAdaptive__menu_active)}>
                {listItems.map(item => <MenuItem key={item.id} title={item.title} />)}
            </div>
        </div>
    )
}