
import Link from "next/link";
import "./globals.css";
import { Fontdiner_Swanky } from 'next/font/google'
import { getServerSession } from "next-auth";
import { options } from "@/lib/authOptions";
import SignOutButton from "@/components/SignOutButton";

const fontdiner = Fontdiner_Swanky({
  weight: ["400"],
  subsets: ["latin"]
})

export default async function RootLayout({ children }) {


  const session = await getServerSession(options)

  console.log(session)

  return (
    <html lang="ru" className={fontdiner.className}>
      <body>
        <header className="flex justify-between container mx-auto py-5">
          <div>LOGO</div>
          <nav className="flex gap-x-4">

            {
              session && (<span>Привет {session.user.email} !</span>
              )
            }

            <Link href="/">Главная</Link>
            <Link href="/about">О нас</Link>
            <Link href="/products">Товары</Link>

            {
              session ? (
                <SignOutButton />
              ) :
                (
                  <>
                    <Link href="/register">Регистрация</Link>
                    <Link href="/api/auth/signin">Вход</Link>
                  </>
                )
            }



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
