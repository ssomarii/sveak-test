import styles from './header.module.scss';
import UserAvatar from '../../assets/images/userImage.jpg';

export const Header = () => {
    return(
        <div className={styles.header}>
            <span>Header</span>
            <div>
                <div className={styles.header__avatarWrap}>
                    <img className={styles.header__avatar} src={UserAvatar} />
                </div>
            </div>
        </div>
    )
}