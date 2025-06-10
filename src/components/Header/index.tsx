import styles from './header.module.scss';
import UserAvatar from '../../assets/images/userImage.jpg';
import { BurgerButton } from '../BurgerButon';

interface IProps {
    isActiveMenu: boolean;
    onClickButtonMenu(): void;
}

export const Header = ({isActiveMenu = false, onClickButtonMenu = () => {}}: IProps) => {

    return(
        <div className={styles.header}>
            <BurgerButton isActive={isActiveMenu} onClickButton={onClickButtonMenu} />
            <span>Header</span>
            <div>
                <div className={styles.header__avatarWrap}>
                    <img className={styles.header__avatar} src={UserAvatar} />
                </div>
            </div>
        </div>
    )
}