import { Download, Phone } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"

function Home() {
  return (
    <main className="grow shrink flex flex-col text-center items-center">
      <div className="mt-32 mb-10">
        <p className="">سلام 👋🏻، اسم من</p>
        <h1 className="text-[2.5rem] text-slate-12 font-black">محمد مهدی بهرامی</h1>
        <p className="">هست و من یه برنامه‌نویس 💻 هستم.</p>
      </div>

      <div className="flex flex-col gap-4 items-center justify-center sm:flex-row">
        <a
          href="/resume.pdf"
          download
          className="flex gap-2 rounded max-w-max bg-blue-03 text-blue-11 hover:bg-blue-04 hover:text-blue-12 active:bg-blue-05 transition-all py-2 px-4"
        >
          <Download size={24} />
          <span>دانلود رزومه</span>
        </a>
        {/* <button
          type="button"
          className="flex gap-2 rounded max-w-max bg-orange-03 text-orange-11 hover:bg-orange-04 hover:text-orange-12 active:bg-orange-05 transition-all py-2 px-4"
        >
          <AppWindow size={24} />
          <span>دیدن پروژه‌ها</span>
        </button> */}
        <Link
          href="/contact"
          className="flex gap-2 rounded max-w-max bg-jade-03 text-jade-11 hover:bg-jade-04 hover:text-jade-12 active:bg-jade-05 transition-all py-2 px-4"
        >
          <Phone size={24} />
          <span>ارتباط با من</span>
        </Link>
      </div>
    </main>
  )
}

export default Home
