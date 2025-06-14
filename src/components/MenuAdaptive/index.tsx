import clsx from "clsx";
import type { TMenuItem } from "../../types";
import { MenuItem } from "../MenuItem";
import styles from './menuAdaptive.module.scss';
import { useEffect } from "react";

interface IProps {
    stylesWrap?: string;
    listItems: TMenuItem[];
    isActive: boolean;
}

export const MenuAdaptive = ({stylesWrap = '', listItems = [], isActive = false}: IProps) => {
    useEffect(() => {
        if (isActive) {
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`;
        } else {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        }
    }, [isActive])

    return(
        <nav className={clsx(styles.menuAdaptive, isActive && styles.menuAdaptive_active, stylesWrap)}>
            <div className={clsx(styles.menuAdaptive__menu, isActive && styles.menuAdaptive__menu_active)}>
                {listItems.map(item => <MenuItem key={item.id} title={item.title} />)}
            </div>
        </nav>
    )
}