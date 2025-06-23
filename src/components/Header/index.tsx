import styles from './header.module.scss';
import UserAvatar from '../../assets/images/userImage.png';

export const Header = () => {

    return (
        <header className={styles.header}>
            <h1 className={styles.header__headerTitle}>Header</h1>
            <div className={styles.header__avatarWrap}>
                <img className={styles.header__avatar} src={UserAvatar}/>
            </div>
        </header>
    )
}
