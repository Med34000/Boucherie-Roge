import Hero from "@/components/Hero";
import styles from "./page.module.css";
import Image from "next/image";

export const metadata = {
    title: "À Propos | Boucherie Rogé Paulhan",
    description: "Découvrez l'histoire de Thierry Rogé, boucher depuis 45 ans, et la philosophie de notre boucherie à Paulhan.",
};

export default function About() {
    return (
        <>
            <Hero
                title="Notre Histoire"
                subtitle="Une passion, un métier, une vie."
                image="/images/about-bg.png"
            />

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.contentBlock}>
                        <h2>Thierry Rogé : 45 ans d&apos;Expertise</h2>
                        <p>
                            La boucherie n&apos;est pas seulement un métier pour Thierry Rogé, c&apos;est une vocation.
                            Avec plus de <strong>45 années d&apos;expérience</strong> au comptoir et à la découpe,
                            Thierry a traversé les époques en gardant une seule constante : l&apos;exigence de la qualité.
                        </p>
                        <p>
                            Chef boucher reconnu, il a fait sa carrière dans plusieurs établissements de renom avant de
                            poser ses valises et ses couteaux à Paulhan. Sa maîtrise technique lui permet de valoriser
                            chaque pièce de viande, pour offrir à ses clients des morceaux d&apos;une tendreté et d&apos;une saveur exceptionnelles.
                        </p>
                    </div>

                    <div className={styles.duoBlock}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/images/about-team.png"
                                alt="Thierry et Nadine Rogé dans leur boucherie"
                                width={800}
                                height={533}
                                className={styles.roundedImage}
                                priority
                            />
                        </div>
                        <div className={styles.textContent}>
                            <h3>Une Aventure Familiale</h3>
                            <p>
                                À ses côtés, <strong>Nadine</strong>, sa compagne, joue un rôle essentiel.
                                Elle l&apos;accompagne dans la gestion quotidienne et accueille les clients avec chaleur et convivialité.
                                Ensemble, ils forment une équipe dévouée, soucieuse de satisfaire chaque demande avec le sourire.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.philosophySection}>
                <div className={styles.container}>
                    <h2>Notre Philosophie : Le Goût du Vrai</h2>
                    <div className={styles.grid}>
                        <div className={styles.card}>
                            <h3>Produits Locaux</h3>
                            <p>Nous privilégions les circuits courts et travaillons avec les éleveurs de la région pour garantir fraîcheur et traçabilité.</p>
                        </div>
                        <div className={styles.card}>
                            <h3>Fait Maison</h3>
                            <p>Nos préparations charcutières sont réalisées sur place, selon des recettes traditionnelles, sans conservateurs inutiles.</p>
                        </div>
                        <div className={styles.card}>
                            <h3>Conseil</h3>
                            <p>Besoin d&apos;une idée recette ou d&apos;un conseil de cuisson ? Nous sommes là pour partager notre passion et nos astuces.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
