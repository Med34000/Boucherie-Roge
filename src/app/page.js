import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero
        title="Boucherie Rogé"
        subtitle="Artisan Boucher à Paulhan depuis 45 ans"
        image="/images/hero-bg.png"
        ctaLink="/contact"
        ctaText="Nous Trouver"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.textColumn}>
              <h2>La Passion du Goût</h2>
              <p>
                Depuis plus de quatre décennies, Thierry Rogé met son savoir-faire d&apos;artisan boucher au service de la qualité.
                Installés rue du Fenouil à Paulhan, nous sélectionnons pour vous les meilleures viandes et charcuteries.
              </p>
              <p>
                Notre philosophie est simple : proposer des produits locaux, savoureux et préparés dans le respect de la tradition bouchère.
              </p>
              <Link href="/a-propos" className={styles.link}>
                En savoir plus sur notre histoire &rarr;
              </Link>
            </div>
            <div className={styles.imageColumn}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/home-cut.png"
                  alt="Découpe artisanale de viande"
                  width={600}
                  height={400}
                  className={styles.roundedImage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.bgAlt}`}>
        <div className={styles.container}>
          <div className={styles.centered}>
            <h2>Nos Spécialités</h2>
            <p>Découvrez une sélection rigoureuse de viandes locales et de produits faits maison.</p>
          </div>
          <div className={styles.featuresGrid}>
            <div className={styles.feature}>
              <h3>Viandes de Terroir</h3>
              <p>Bœuf, Veau, Agneau et Porc sélectionnés auprès d&apos;éleveurs locaux.</p>
            </div>
            <div className={styles.feature}>
              <h3>Charcuterie Maison</h3>
              <p>Saucisses, pâtés et terrines préparés dans notre atelier.</p>
            </div>
            <div className={styles.feature}>
              <h3>Traiteur</h3>
              <p>Des plats cuisinés chaque jour pour vous régaler.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
