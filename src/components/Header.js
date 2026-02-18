import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link href="/">
                        <span className={styles.logoMain}>Boucherie Rogé</span>
                        <span className={styles.logoSub}>Artisan Boucher à Paulhan</span>
                    </Link>
                </div>
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li><Link href="/">Accueil</Link></li>
                        <li><Link href="/a-propos">À Propos</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
