export default function SocialButton({ social }) {
  return (
    <a
      href={`${social?.url}`}
      target={"_blank"}
      className="h-12 w-12 flex items-center justify-center rounded-full group shadow-md transition ease-in-out duration-500 bg-customGrayHeavy hover:scale-125"
    >
      <div className="text-white transition ease-in-out duration-500 group-hover:text-primary group-hover:scale-125">
        {social?.icon}
      </div>
    </a>
  )
}
