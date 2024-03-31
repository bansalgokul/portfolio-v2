import { Menu } from "@mui/icons-material"
import { useState, useEffect, useRef } from "react"

const Navbar = () => {
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
	const mobileMenuRef = useRef(null)

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!isMobileMenuOpen)
	}

	useEffect(() => {
		const handleOutsideClick = (event) => {
			if (
				mobileMenuRef.current &&
				!mobileMenuRef.current.contains(event.target)
			) {
				setMobileMenuOpen(false)
			}
		}

		if (isMobileMenuOpen) {
			document.addEventListener("mousedown", handleOutsideClick)
		} else {
			document.removeEventListener("mousedown", handleOutsideClick)
		}

		return () => {
			document.removeEventListener("mousedown", handleOutsideClick)
		}
	}, [isMobileMenuOpen])

	return (
		<nav className="w-full fixed  backdrop-blur-sm z-50 top-0  text-white-primary">
			<div className="max-w-6xl flex items-center justify-between mx-auto pt-8 px-4">
				<div className="flex gap-14 items-center">
					<a href="#" className="text-3xl font-bold tracking-tighter">
						GB
					</a>

					<ul className=" hidden sm:flex gap-6 font-medium text-sm items-baseline ">
						<li>
							<a href="#projects">Projects</a>
						</li>
						<li>
							<a href="#experience">Experience</a>
						</li>
						<li>
							<a href="#skills">Skills</a>
						</li>
						<li>
							<a href="#contact">Contact</a>
						</li>
						<li>
							<a
								href="https://www.blog.gokulbansal.in/"
								target="_blank"
								rel="noreferrer"
							>
								Blog
							</a>
						</li>
					</ul>
				</div>

				<a
					href="#contact"
					className="hidden sm:flex px-5 py-2.5 text-black-primary text-xs font-bold bg-white-primary rounded-full"
				>
					LET&apos;S TALK
				</a>

				<div className="flex sm:hidden" onClick={toggleMobileMenu}>
					<Menu fontSize="large" />
				</div>

				{isMobileMenuOpen && (
					<div className="h-screen absolute bg-black-secondary/40 w-full top-0 right-0">
						<div
							ref={mobileMenuRef}
							className="h-screen  bg-black-primary min-w-[200px]  w-[60%] ml-auto flex-col"
						>
							<div className="p-8 " onClick={toggleMobileMenu}>
								<Menu fontSize="large" />
							</div>
							<ul className="flex-col flex text-center gap-4 bg-black-primary  p-8">
								<li>
									<a href="#projects">Projects</a>
								</li>
								<li>
									<a href="#experience">Experience</a>
								</li>
								<li>
									<a href="#skills">Skills</a>
								</li>
								<li>
									<a href="#contact">Contact</a>
								</li>
								<li>
									<a
										href="https://www.blog.gokulbansal.in/"
										target="_blank"
										rel="noreferrer"
									>
										Blog
									</a>
								</li>
							</ul>
							<div className="flex justify-center">
								<a
									href="#contact"
									className=" w-fit px-5 py-2.5 text-black-primary text-sm font-bold bg-white-primary rounded-full"
								>
									LET&apos;S TALK
								</a>
							</div>
						</div>
					</div>
				)}
			</div>
		</nav>
	)
}
export default Navbar
