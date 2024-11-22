import type { Icon } from "@phosphor-icons/react"
import { Chats, Envelope, Globe, Phone } from "@phosphor-icons/react/dist/ssr"

interface ContactWay {
  id: number
  title: string
  value: string
  href: string
  icon: Icon
}

const CONTACT_WAYS: ContactWay[] = [
  {
    id: 0,
    title: "ایمیل",
    value: "wd.bahrami@gmail.com",
    href: "mailto:wd.bahrami@gmail.com",
    icon: Envelope,
  },
  {
    id: 1,
    title: "ایتا",
    value: "@wd_bahrami",
    href: "https://eitaa.com/wd_bahrami",
    icon: Chats,
  },
  {
    id: 2,
    title: "وب‌سایت",
    value: "bahrami85.ir",
    href: "https://bahrami85.ir/",
    icon: Globe,
  },
  {
    id: 3,
    title: "تلفن",
    value: "09309421787",
    href: "tel:09309421787",
    icon: Phone,
  },
]

export default function ContactPage() {
  return (
    <main className="grow shrink flex flex-col text-center">
      <div className="mt-32 mb-10">
        <h1 className="text-[2.5rem] text-slate-12 font-black">ارتباط با من</h1>
        <p>اینجا راه‌های ارتباطی با من رو میبینی 😊</p>
        <hr className="mt-5 mb-10 bg-slate-06 border-none h-0.5 max-w-[40rem] w-full mx-auto" />
        <div className="flex flex-col gap-8 max-w-[40rem] w-full min-w-20 mx-auto">
          {CONTACT_WAYS.map(cw => (
            <ContactWay key={cw.id} contactWay={cw} />
          ))}
        </div>
      </div>
    </main>
  )
}

interface CWProps {
  contactWay: ContactWay
}

function ContactWay({ contactWay }: CWProps) {
  const IconToRender = contactWay.icon

  return (
    <p className="w-full flex gap-6 justify-between">
      <span className="flex gap-2 items-center">
        <IconToRender size={24} />
        <span>{contactWay.title}</span>
      </span>
      <a
        dir="ltr"
        className="font-mono border-b text-blue-11 border-transparent hover:border-current"
        href={contactWay.href}
        target="_blank"
        rel="noreferrer"
      >
        {contactWay.value}
      </a>
    </p>
  )
}
