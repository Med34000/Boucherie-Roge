import { Playfair_Display, Inter } from "next/font/google"; // Import fonts
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

// Configure fonts
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Use variable for CSS
  display: "swap",
});

export const metadata = {
  title: "Boucherie Rogé | Artisan Boucher à Paulhan",
  description: "Boucherie traditionnelle à Paulhan. Thierry Rogé, artisan boucher depuis 45 ans. Viandes de qualité et produits locaux.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body className={inter.className}>
        <Header />
        <main style={{ minHeight: '80vh' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}


