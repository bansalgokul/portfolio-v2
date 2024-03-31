import { useState } from "react"
import { ContentCopy, Email, Phone } from "@mui/icons-material"
import Icons from "../../assets/index"

const ContactSection = () => {
	const [emailCopied, setEmailCopied] = useState(false)
	const [phoneCopied, setPhoneCopied] = useState(false)

	const copyToClipboard = (text) => {
		const textArea = document.createElement("textarea")
		textArea.value = text
		document.body.appendChild(textArea)
		textArea.select()
		document.execCommand("copy")
		document.body.removeChild(textArea)
	}

	return (
		<section id="contact" className="bg-black-primary ">
			<div className=" max-w-6xl mx-auto pt-20 w-full flex flex-col gap-12 items-center pb-12 px-4">
				<div className="flex-col flex gap-6 justify-between w-full items-center">
					<h1 className="text-5xl font-bold max-w-[25ch] text-center md:text-justify">
						<span className="primary-gradient text-transparent bg-clip-text">
							GET IN TOUCH
						</span>
					</h1>

					<p className="text-lg font-normal max-w-[50ch] text-center">
						Have a project in mind? Looking to partner or work
						together? Reach out to me through mail or phone.
					</p>
				</div>
				<div className="flex flex-col items-center gap-4 md:gap-12 w-full max-w-[1152px] mx-auto">
					<div className="flex flex-col gap-1 md:gap-4 text-lg md:text-3xl font-bold">
						<div className="flex gap-1 md:gap-4 justify-center items-center">
							<div>
								<Email />
							</div>
							<a
								href="mailto:bansalgokul134@gmail.com"
								className="text-gray-900 dark:text-gray-100"
							>
								bansalgokul134@gmail.com
							</a>
							<button
								onClick={() => {
									copyToClipboard("bansalgokul134@gmail.com")
									setEmailCopied(true)
									setPhoneCopied(false)
								}}
							>
								<ContentCopy />
							</button>
							{emailCopied && (
								<span className="text-green-600 text-base">
									Copied!
								</span>
							)}
						</div>
						<div className="flex gap-1 md:gap-4 justify-center items-center">
							<div>
								<Phone />
							</div>
							<a
								href="tel:+91-8689054520"
								className="text-gray-900 dark:text-gray-100"
							>
								+91-8689054520
							</a>
							<button
								onClick={() => {
									copyToClipboard("+91-8689054520")
									setPhoneCopied(true)
									setEmailCopied(false)
								}}
							>
								<ContentCopy />
							</button>
							{phoneCopied && (
								<span className="text-green-600 text-base">
									Copied!
								</span>
							)}
						</div>
					</div>
					<div className="flex flex-col gap-3 ">
						<div className="text-center">
							You may also find me on these platforms
						</div>
						<div className="flex gap-2 text-3xl justify-center items-center">
							<a href="https://www.linkedin.com/in/gokul-bansal-553429225/">
								<img
									src={Icons.linkedin}
									alt=""
									className="w-11 h-11"
								/>
							</a>
							<a href="https://github.com/bansalgokul">
								<img
									src={Icons.github}
									alt=""
									className="w-10 h-10 invert"
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default ContactSection
