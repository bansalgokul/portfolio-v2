import jsIcon from "../../assets/icon-javscript.svg"
import tsIcon from "../../assets/icon-typescript.svg"
import reactIcon from "../../assets/icon-react.svg"
import nodeIcon from "../../assets/icon-node.svg"
import expressIcon from "../../assets/icon-express.svg"
import mongoIcon from "../../assets/icon-mongo.svg"
import tailwindIcon from "../../assets/icon-tailwind.svg"
import gitIcon from "../../assets/icon-git.svg"
import cppIcon from "../../assets/icon-cpp.svg"
import PropTypes from "prop-types"

const skills = [
	{
		icon: jsIcon,
		name: "Javascript",
		invert: false,
	},
	{
		icon: tsIcon,
		name: "Typescript",
		invert: false,
	},
	{
		icon: reactIcon,
		name: "React",
		invert: false,
	},
	{
		icon: nodeIcon,
		name: "Node.js",
		invert: false,
	},
	{
		icon: expressIcon,
		name: "Express.js",
		invert: true,
	},
	{
		icon: mongoIcon,
		name: "MongoDB",
		invert: false,
	},
	{
		icon: cppIcon,
		name: "C++",
		invert: false,
	},
	{
		icon: tailwindIcon,
		name: "Tailwindcss",
		invert: false,
	},
	{
		icon: gitIcon,
		name: "Git",
		invert: false,
	},
]

const SkillsSection = () => {
	return (
		<section id="skills" className="bg-black-secondary ">
			<div className=" max-w-6xl mx-auto pt-20 w-full  flex flex-col gap-12 items-center pb-12 px-4">
				<div className="flex-col flex gap-6 justify-between w-full items-center">
					<h1 className="text-5xl font-bold max-w-[25ch] text-center md:text-justify">
						<span className="primary-gradient text-transparent bg-clip-text">
							Skills
						</span>
					</h1>

					<p className="text-lg font-normal max-w-[50ch] text-center">
						The skills, tools and technologies I am really good at:
					</p>
				</div>

				<div className="flex flex-wrap gap-16 justify-center items-center">
					{skills.map(({ icon, name, invert }) => (
						<SkillItem
							key={name}
							icon={icon}
							name={name}
							invert={invert}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default SkillsSection

const SkillItem = ({ icon, name, invert }) => {
	return (
		<div className="flex flex-col gap-2 w-fit h-fit items-center">
			<img
				src={icon}
				alt=""
				className={`w-16 h-16 ${invert ? "dark:invert" : ""}`}
			/>
			<span>{name}</span>
		</div>
	)
}
SkillItem.propTypes = {
	icon: PropTypes.node.isRequired,
	name: PropTypes.string.isRequired,
	invert: PropTypes.bool.isRequired,
}
