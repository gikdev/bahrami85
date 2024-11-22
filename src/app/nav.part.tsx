import logo from "@/assets/logo.svg"
import { jn } from "@/shared/helpers"
import Image from "next/image"
import Link from "next/link"

function Nav() {
  const styles = {
    container: jn("flex items-center py-4 gap-3"),
    link: jn("hover:text-slate-12 border-b border-transparent hover:border-current"),
  }

  return (
    <nav className={styles.container}>
      <Link href="/" className="me-auto">
        <Image src={logo} alt="" width={40} height={20} />
      </Link>
      <a href="/resume.pdf" download className={styles.link}>
        رزومه
      </a>
      {/* <Link href="#/" className={styles.link}>
        پروژه‌ها
      </Link> */}
      <Link href="/contact" className={styles.link}>
        ارتباط با من
      </Link>
    </nav>
  )
}

export default Nav
