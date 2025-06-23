import clsx from "clsx";
import type { TMenuItem } from "../../types";
import { MenuItem } from "../MenuItem";
import styles from './menu.module.scss';
import { useEffect } from "react";

interface IProps {
    stylesWrap?: string;
    listItems: TMenuItem[];
    isActive: boolean;
}

export const Menu = ({stylesWrap = '', listItems = [], isActive = false}: IProps) => {
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
        <nav className={clsx(styles.menu, isActive && styles.menu_active, stylesWrap)}>
            <div className={clsx(styles.menu__menu, isActive && styles.menu__menu_active)}>
                {listItems.map(item => <MenuItem key={item.id} link={item.link} title={item.title} />)}
            </div>
        </nav>
    )
}
