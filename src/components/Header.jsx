import styles from './Header.module.css'
import igniteLogo from '../assets/ignites-imbol.svg'


export function Header() {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="Ignite logo"/>
            <strong>Feed Ignite</strong>
        </header>
    )

}