import React from "react"
import profile from "../../assets/profile.png"
import { PiStarFourFill } from "react-icons/pi"
import Icons from "../../assets/index"
const HeroSection = () => {
	return (
		<section
			id="home"
			className=" bg-black-primary text-white-primary w-full min-h-screen flex flex-col items-center px-4 justify-center gap-6 relative"
		>
			<div className="relative w-48 h-48 overflow-hidden rounded-full">
				{/* Circular Background with Rotating Gradient */}
				<div className="absolute inset-0 bg-gradient-conic animate-spin-slow " />
				Profile Image
				<div className="w-full h-full flex items-center justify-center overflow-hidden rounded-full bg-transparent">
					<img
						src={profile}
						alt="Profile"
						className="w-full h-full object-cover rounded-full bg-transparent z-10 drop-shadow-2xl shadow-2xl shadow-black"
					/>
				</div>
			</div>
			<h1 className="text-3xl sm:text-5xl font-bold text-center max-w-[25ch]">
				<span className="primary-gradient text-transparent bg-clip-text">
					Hello, I&apos;m Gokul,{" "}
				</span>
				web developer based in India.
			</h1>

			<p className="text-lg font-medium text-center max-w-[75ch]">
				Transforming visions into interactive and impactful web
				experiences, I am a dedicated Full Stack Web Developer from
				India, weaving code to shape the future of online innovation.
			</p>

			<div className="flex gap-4">
				<a
					href="contact"
					className="flex px-5 py-2.5 text-black-primary text-xs font-bold bg-white-primary rounded-full"
				>
					GET IN TOUCH
				</a>
				<a
					href="projects"
					className="flex px-5 py-2.5 text-black-primary text-xs font-bold bg-white-primary rounded-full"
				>
					VIEW ALL WORKS
				</a>
			</div>

			<div className="flex gap-3">
				<a
					href="https://github.com/bansalgokul"
					target="_blank"
					rel="noreferrer"
				>
					<img
						src={Icons.github}
						alt=""
						height={30}
						width={30}
						className="invert"
					/>
				</a>
				<a
					href="https://www.linkedin.com/in/gokul-bansal-553429225/"
					target="_blank"
					rel="noreferrer"
				>
					<img src={Icons.linkedin} alt="" height={30} width={30} />
				</a>
				<a
					href="https://twitter.com/GokulBansa56755/"
					target="_blank"
					rel="noreferrer"
				>
					<img src={Icons.twitter} alt="" height={30} width={30} />
				</a>
				<a
					href="https://github.com/bansalgokul"
					target="_blank"
					rel="noreferrer"
				>
					<img src={Icons.instagram} alt="" height={24} width={24} />
				</a>
			</div>

			<div className="h-14 bg-gradient-conic animate-spin-slow  w-full  flex justify-center absolute bottom-12">
				<div className="h-14 bg-white-primary transform -skew-y-3 w-full">
					<div className="w-full flex h-full items-center gap-8 overflow-clip text-lg font-medium text-black-primary/90 px-3">
						{repeatKeywords(6)}
					</div>
				</div>
			</div>
		</section>
	)
}
export default HeroSection

const keywords = ["Design", "Develop", "Discover"]

const repeatKeywords = (times) => {
	let repeatedCode = []
	let x = 0
	for (let i = 0; i < times; i++) {
		keywords.forEach((keyword) => {
			repeatedCode.push(
				<React.Fragment key={x++}>
					<span>{keyword}</span>
					<div>
						<PiStarFourFill className="w-4 h-4 text-yellow-400" />
					</div>
				</React.Fragment>
			)
		})
	}

	return repeatedCode
}
