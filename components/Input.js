import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEye,
  faEyeSlash,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

export default function Input({
  h,
  w,
  type,
  placeholder,
  value,
  onChange,
  icon,
  isDisable,
}) {
  const [isShow, setIsShow] = useState(false)

  return (
    <div
      className={`${
        h ? h : "h-12"
      } ${w} flex items-center p-2 px-5 rounded-xl bg-input`}
    >
      <input
        type={
          type != "password"
            ? type
            : type == "password" && !isShow
            ? "password"
            : "text"
        }
        placeholder={placeholder}
        className="w-full bg-transparent outline-none"
        onChange={onChange}
        disabled={isDisable}
        value={value}
      />
      {icon && <FontAwesomeIcon icon={icon} />}
      {type == "password" && (
        <div
          onClick={(e) => {
            e.preventDefault()
            setIsShow(!isShow)
          }}
        >
          <FontAwesomeIcon
            icon={isShow ? faEyeSlash : faEye}
            className="opacity-70"
          />
        </div>
      )}
    </div>
  )
}
