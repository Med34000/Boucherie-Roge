import Hero from "@/components/Hero";
import styles from "./page.module.css";

export const metadata = {
    title: "Contact & Horaires | Boucherie Rogé Paulhan",
    description: "Adresse, téléphone et horaires d'ouverture de la Boucherie Rogé à Paulhan. Venez nous rendre visite !",
};

export default function Contact() {
    return (
        <>
            <Hero
                title="Nous Contacter"
                subtitle="Une question ? Une commande ? N&apos;hésitez pas."
                image="/images/contact-bg.png"
            />

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        <div className={styles.infoCard}>
                            <h2>Nos Coordonnées</h2>
                            <div className={styles.infoItem}>
                                <h3>Adresse</h3>
                                <p>Rue du Fenouil</p>
                                <p>34230 Paulhan, France</p>
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=Rue+du+Fenouil+34230+Paulhan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.mapLink}
                                >
                                    Voir sur la carte &rarr;
                                </a>
                            </div>

                            <div className={styles.infoItem}>
                                <h3>Téléphone</h3>
                                <p className={styles.phone}>06 17 16 16 99</p>
                                <p className={styles.note}>N&apos;hésitez pas à laisser un message.</p>
                            </div>

                            <div className={styles.infoItem}>
                                <h3>Horaires d&apos;Ouverture</h3>
                                <ul className={styles.hoursList}>
                                    <li><span>Lundi</span> <span>Fermé</span></li>
                                    <li><span>Mardi</span> <span>7h30 - 12h30 / 15h30 - 19h30</span></li>
                                    <li><span>Mercredi</span> <span>7h30 - 12h30 / 15h30 - 19h30</span></li>
                                    <li><span>Jeudi</span> <span>7h30 - 12h30 / 15h30 - 19h30</span></li>
                                    <li><span>Vendredi</span> <span>7h30 - 12h30 / 15h30 - 19h30</span></li>
                                    <li><span>Samedi</span> <span>7h30 - 12h30 / 15h30 - 19h30</span></li>
                                    <li><span>Dimanche</span> <span>7h30 - 12h30</span></li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles.mapContainer}>
                            {/* Embed Google Map Iframe */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2899.3876679234823!2d3.4567!3d43.5432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b144216709841f%3A0x4078821166ac7b0!2sPaulhan!5e0!3m2!1sfr!2sfr!4v1620000000000!5m2!1sfr!2sfr"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className={styles.mapFrame}
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
