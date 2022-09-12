import Facebook from "@components/icons/Facebook"
import GitHub from "@components/icons/GitHub"
import GitLab from "@components/icons/GitLab"

const link = [
  {
    name: "facebook",
    url: "https://www.facebook.com/GongPawaret/",
    icon: <Facebook />,
  },
  {
    name: "github",
    url: "https://github.com/JerGun/",
    icon: <GitHub />,
  },
  {
    name: "gitlab",
    url: "https://gitlab.com/JerGun/",
    icon: <GitLab />,
  },
]

export default function SocialButton({ name }) {
  return (
    <a
      href={`${link.find((e) => e.name == name).url}`}
      target={"_blank"}
      className="h-12 w-12 flex items-center justify-center rounded-full group transition ease-in-out duration-500 bg-customGrayHeavy hover:scale-125"
    >
      {link.find((e) => e.name == name).icon}
    </a>
  )
}
