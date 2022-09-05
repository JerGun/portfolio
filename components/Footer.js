import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCopyright } from "@fortawesome/free-regular-svg-icons"

export default function Footer() {
  return (
    <div className="h-10 flex justify-center space-x-1 bg-background opacity-90">
      <div className="flex items-center space-x-1 text-sm text-gray-400">
        <FontAwesomeIcon icon={faCopyright} />
        <p>All rights are reserved 2022. Powered by </p>
        <a
          href="https://facebook.com/GongPawaret/"
          target="_blank"
          className="text-white hover:underline"
        >
          Pawaret Muengkaew
        </a>
        .<p>View source code on</p>
        <a
          href="https://github.com/JerGun/"
          target="_blank"
          className="text-white hover:underline"
        >
          GitHub
        </a>
        .
      </div>
    </div>
  )
}
