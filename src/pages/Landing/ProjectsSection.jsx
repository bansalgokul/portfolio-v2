import icons from "../../assets/index"

const ProjectsSection = () => {
	return (
		<section
			id="projects"
			className=" max-w-6xl mx-auto pt-20 w-full min-h-screen flex flex-col gap-12 items-center pb-12 px-4"
		>
			<div className="flex-col md:flex-row flex gap-6 justify-between w-full items-center">
				<h1 className="text-5xl font-bold max-w-[25ch] text-center md:text-justify">
					Look at My <br />
					<span className="primary-gradient text-transparent bg-clip-text">
						Projects.
					</span>
				</h1>

				<p className="text-base font-normal text-justify max-w-[50ch] ">
					Transforming visions into interactive and impactful web
					experiences, I am a dedicated Full Stack Web Developer from
					India, weaving code to shape the future of online
					innovation.
				</p>
			</div>

			<div className="flex flex-wrap justify-center md:justify-evenly gap-12">
				{Projects.map((p, index) => (
					<div
						key={index}
						className="w-[80%] md:min-w-[350px] md:w-[45%] h-[400px] rounded-md overflow-clip bg-black-primary"
					>
						<div className="bg-[#c0c0c0] flex justify-center items-center p-2 h-[300px]">
							<div className="relative rounded-lg overflow-hidden w-fit h-fit">
								<img
									src={p.image}
									alt=""
									className="w-auto h-auto object-contain max-h-[280px]"
								/>
								<div className="absolute inset-0 flex justify-center items-center gap-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
									<a
										href={p.github}
										className="flex px-5 py-2.5 text-black-primary text-xs font-bold bg-white-primary rounded-full"
									>
										GitHub
									</a>
									{p.live && (
										<a
											href={p.live}
											className="flex px-5 py-2.5 text-black-primary text-xs font-bold bg-white-primary rounded-full"
										>
											Live Website
										</a>
									)}
								</div>
							</div>
						</div>
						<div className="text-2xl font-bold p-4 flex flex-col gap-2">
							<span className="tracking-wider">{p.name}</span>
							<span className="text-lg font-normal">
								{p.description}
							</span>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
export default ProjectsSection

const Projects = [
	{
		name: "Blogem",
		description: "A Community Blogging website",
		image: icons.blogem,
		github: "https://github.com/bansalgokul/blog-em",
		live: "https://www.blog.gokulbansal.in/",
	},
	{
		name: "Artha",
		description: "Landing Page for a startup",
		image: icons.artha,
		github: "https://github.com/bansalgokul/Artha",
		live: "https://www.artha.select/",
	},
	{
		name: "EMS",
		description: "Employee Management System",
		image: icons.ems,
		github: "https://github.com/bansalgokul/Employee-Management-System",
		live: null,
	},
	{
		name: "Snake Game",
		description: "Snake game using vanilla JS",
		image: icons.snake,
		github: "https://github.com/bansalgokul/Snake-Game-Vanilla-JS",
		live: "https://bansalgokul.github.io/Snake-Game-Vanilla-JS/",
	},
]
