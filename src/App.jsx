import Navbar from "./components/Navbar"
import LandingPage from "./pages/Landing/LandingPage"
function App() {
	return (
		<div className="w-full min-h-screen bg-black-secondary text-white-primary">
			<Navbar />

			<LandingPage />
		</div>
	)
}

export default App
