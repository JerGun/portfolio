export default function SkillItem({ icon, name }) {
  return (
    <div className="w-fit flex flex-col items-center text-center space-y-3 transition ease-in-out duration-500 text-[#AAAAAA] hover:scale-125 hover:text-white">
      <div className="h-12 flex items-center scale-75">{icon}</div>
      <p>{name}</p>
    </div>
  )
}
