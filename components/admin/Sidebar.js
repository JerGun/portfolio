import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faAward,
  faBriefcase,
  faCertificate,
  faGraduationCap,
  faHouse,
  faLightbulb,
  faPen,
  faRocket,
  faSquarePollHorizontal,
  faUser,
} from "@fortawesome/free-solid-svg-icons"
import { useRouter } from "next/router"
import cookieCutter from "cookie-cutter"
import Link from "next/link"

const menus = [
  {
    name: "Dashboard",
    path: "/admin",
    icon: faHouse,
  },
  {
    name: "Bio",
    path: "/admin/bio",
    icon: faUser,
  },
  {
    name: "Experiences",
    path: "/admin/experiences",
    icon: faRocket,
  },
  {
    name: "Skills",
    path: "/admin/skills",
    icon: faLightbulb,
  },
  {
    name: "Awards",
    path: "/admin/awards",
    icon: faAward,
  },
  {
    name: "Certificates",
    path: "/admin/certificates",
    icon: faCertificate,
  },
  {
    name: "Education",
    path: "/admin/education",
    icon: faGraduationCap,
  },
  {
    name: "Projects",
    path: "/admin/projects",
    icon: faBriefcase,
  },
  {
    name: "Highlight",
    path: "/admin/highlight",
    icon: faAward,
  },
]

export default function Sidebar() {
  const router = useRouter()

  const logoutHandler = async (e) => {
    e.preventDefault()

    await cookieCutter.set("accessToken", "", { expires: new Date(0) })
    router.push({ pathname: "/admin/login" })
  }

  return (
    <div className="h-full w-2/12 flex flex-col justify-between p-5">
      <div className="flex flex-col items-center space-y-3">
        <Link href="/admin">
          <img
            src="/images/logo.png"
            alt="pawaret.dev"
            className="h-20 w-20 cursor-pointer"
          />
        </Link>
        {menus.map((menu, i) => (
          <Link href={menu.path} key={i}>
            <div
              className={`${
                router.pathname == menu.path &&
                "bg-primary text-black font-bold"
              } h-12 w-full flex items-center space-x-3 rounded-xl pl-5 cursor-pointer`}
            >
              <FontAwesomeIcon icon={menu.icon} />
              <p>{menu.name}</p>
            </div>
          </Link>
        ))}
      </div>
      <button
        className="h-12 w-full flex items-center justify-center font-bold space-x-3 rounded-xl bg-red-500 text-black"
        onClick={logoutHandler}
      >
        Logout
      </button>
    </div>
  )
}
