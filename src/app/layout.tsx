import type { Metadata } from "next"
import localFont from "next/font/local"
import "../styles.css"
import { jn } from "@/shared/helpers"
import Nav from "./nav.part"

const vazir = localFont({
  src: "../assets/vazirmatn.woff2",
  variable: "--font-vazir",
  weight: "100 900",
})

const metadata: Metadata = {
  title: "بهرامی 💻",
  description: "سایت شخصی «بهرامی»",
}

interface Props {
  children: React.ReactNode
}

function RootLayout({ children }: Props) {
  const styles = {
    html: jn("min-h-dvh"),
    body: jn(
      "flex min-h-dvh flex-col font-vazir antialiased bg-slate-01 text-slate-11 px-4 max-w-[60rem] mx-auto",
      vazir.variable,
    ),
  }

  return (
    <html lang="fa" dir="rtl" className={styles.html}>
      <body className={styles.body}>
        <Nav />
        {children}
        <footer className="flex flex-col items-center justify-center p-4 text-xs text-slate-09">
          <p>
            <code>v1.0.0</code> - تمام حقوق محفوظ است © ۱۴۰۳
          </p>
        </footer>
      </body>
    </html>
  )
}

export default RootLayout
export { metadata }
