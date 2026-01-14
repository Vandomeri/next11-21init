import Link from "next/link";
import "./globals.css";
import { Fontdiner_Swanky } from 'next/font/google'

const fontdiner = Fontdiner_Swanky({
  weight: ["400"],
  subsets: ["latin"]
})

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={fontdiner.className}>
      <body>
        <header className="flex justify-between container mx-auto py-5">
          <div>LOGO</div>
          <nav className="flex gap-x-4">
            <Link href="/">Главная</Link>
            <Link href="/about">О нас</Link>
            <Link href="/products">Товары</Link>
          </nav>
        </header>

        <main>
          {children}
        </main>

        <footer>
          Подвал сайта. 2026 год
        </footer>
      </body>
    </html>
  );
}
