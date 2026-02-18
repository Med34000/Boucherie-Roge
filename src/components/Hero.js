import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero({ title, subtitle, image, ctaLink, ctaText }) {
    return (
        <section className={styles.hero} style={{ backgroundImage: `url(${image})` }}>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <h1 className={styles.title}>{title}</h1>
                {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
                {ctaLink && (
                    <Link href={ctaLink} className={styles.cta}>
                        {ctaText}
                    </Link>
                )}
            </div>
        </section>
    );
}
