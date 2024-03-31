const ExperienceEducationSection = () => {
	return (
		<section id="experience" className="bg-black-primary ">
			<div className=" max-w-6xl mx-auto pt-20 w-full  flex flex-wrap gap-12 pb-12 px-4">
				<div className="flex-col flex gap-6 w-full md:w-[45%] ">
					<h1 className="text-5xl font-bold max-w-[25ch] text-center md:text-justify">
						<span className="primary-gradient text-transparent bg-clip-text">
							Work Experience
						</span>
					</h1>
					<div className="flex flex-col border-collapse">
						<div className="flex items-center justify-between border-y border-gray-600 p-3">
							<div className="flex flex-col gap-1">
								<span className="text-xl font-medium">
									Nethues Technologies Pvt Ltd
								</span>
								<span className="text-base text-gray-300">
									Full Stack Web Development Intern
								</span>
							</div>
							<div>
								<span className="text-base text-gray-400">
									6/2023 - 7/2023
								</span>
							</div>
						</div>
						<div className="flex items-center justify-between border-y border-gray-600 p-3">
							<div className="flex flex-col gap-1">
								<span className="text-xl font-medium">
									Google Developer Student Club
								</span>
								<span className="text-base text-gray-300">
									DSA Mentor
								</span>
							</div>
							<div>
								<span className="text-base text-gray-400">
									3/2024 - Present
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="flex-col flex gap-6 w-full md:w-[45%] ">
					<h1 className="text-5xl font-bold max-w-[25ch] text-center md:text-justify">
						<span className="primary-gradient text-transparent bg-clip-text">
							Education
						</span>
					</h1>
					<div className="flex flex-col ">
						<div className="flex items-center justify-between border-y border-gray-600 p-3">
							<div className="flex flex-col gap-1">
								<span className="text-xl font-medium">
									Manipal University Jaipur
								</span>
								<span className="text-base text-gray-300">
									B.Tech Computer Science and Engineering
								</span>
							</div>
							<div>
								<span className="text-base text-gray-400">
									2021-2025
								</span>
							</div>
						</div>
						<div className="flex items-center justify-between border-y border-gray-600 p-3">
							<div className="flex flex-col gap-1">
								<span className="text-xl font-medium">
									DAV SCHOOL SONIPAT
								</span>
								<span className="text-base text-gray-300"></span>
							</div>
							<div>
								<span className="text-base text-gray-400">
									2008-2021
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default ExperienceEducationSection
