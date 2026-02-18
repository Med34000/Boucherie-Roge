import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.column}>
                    <h3>Boucherie Rogé</h3>
                    <p>Artisan boucher de père en fils.</p>
                    <p>Expertise et Qualité depuis 45 ans.</p>
                </div>
                <div className={styles.column}>
                    <h3>Nous Trouver</h3>
                    <p>Rue du Fenouil</p>
                    <p>34230 Paulhan, France</p>
                    <p className={styles.phone}>Tél : 06 17 16 16 99</p>
                </div>
                <div className={styles.column}>
                    <h3>Horaires d&apos;Ouverture</h3>
                    <p>Mardi - Samedi</p>
                    <p>7h30 - 12h30 / 15h30 - 19h30</p>
                    <p>Dimanche : 7h30 - 12h30</p>
                </div>
            </div>
            <div className={styles.copyright}>
                <p>&copy; {currentYear} Boucherie Rogé. Tous droits réservés.</p>
            </div>
        </footer>
    );
}
