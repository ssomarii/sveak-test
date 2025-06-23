import styles from './header.module.scss';
import UserAvatar from '../../assets/images/userImage.png';
import { BurgerButton } from '../BurgerButon';

interface IProps {
    isActiveMenu: boolean;
    onClickButtonMenu(): void;
}

export const Header = ({isActiveMenu = false, onClickButtonMenu = () => {}}: IProps) => {

    return(
        <header className={styles.header}>
            <BurgerButton isActive={isActiveMenu} onClickButton={onClickButtonMenu} />
            <h1>Header</h1>
            <div className={styles.header__avatarWrap}>
                <img className={styles.header__avatar} src={UserAvatar} />
            </div>
        </header>
    )
}
