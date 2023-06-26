import "./globals.scss";
import { Roboto } from "next/font/google";
import styles from "./layout.module.scss";
import Link from "next/link";
import { StoreProvider } from "@/redux/StoreProvider";
import { CartIcon } from "@/components/Cart";
import MoviesLoader from "@/redux/apiQuery/MoviesLoader";
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <StoreProvider>
          <MoviesLoader/>
          <div className={styles.container}>
            <header className={styles.header}>
              <div className={styles.siteName}>
                <Link href="/">Билетопоиск</Link>
              </div>
              <CartIcon className={styles.cartIcon} />
            </header>
            <main className={styles.main}>{children}</main>

            <footer className={styles.footer}>
              <div className="anchor">
                <Link href="./faq">Вопросы и ответы</Link>
              </div>
              <div className="anchor">
                <Link href={"./about"}> {"О нас"}</Link>
              </div>
            </footer>
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
