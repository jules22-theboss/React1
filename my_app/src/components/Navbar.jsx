import styles from './Navbar.module.css'


export default function Nav(){
    return(
    <nav className={styles.nav}>
        <div className={styles.logoContainer}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Finn_the_Human_character.svg/250px-Finn_the_Human_character.svg.png" alt="" />
        </div>
        <div className="nav-section">
            <ul className={styles.navItems}>
                <li className={styles.navItem}><a className={styles.navLink} href="/">Home</a></li>
                <li className={styles.navItem}><a className={styles.navLink} href="/">About</a></li>
                <li className={styles.navItem}><a className={styles.navLink} href="/">Store</a></li>
            </ul>
        </div>
    </nav>


    )

}