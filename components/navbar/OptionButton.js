import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function OptionButton({
  width,
  name,
  icon,
  onClick,
  onMouseEnter,
  onMouseLeave,
  condition,
}) {
  return (
    <button
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="flex items-center space-x-3 px-5 transition-all ease-in-out hover:scale-110"
      style={{
        transition: "all 500ms",
        transitionTimingFunction: "ease-in-out",
        color: condition ? "#FFC400" : "#fff",
      }}
    >
      <FontAwesomeIcon icon={icon} />
      <p
        style={{
          width: condition ? (width ? width : "40px") : "0px",
          opacity: condition ? "1" : "0",
          color: condition ? "#FFC400" : "#fff",
          transition: "all 500ms",
          transitionTimingFunction: "ease-in-out",
        }}
      >
        {name}
      </p>
    </button>
  )
}
