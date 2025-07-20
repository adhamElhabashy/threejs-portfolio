import Hero from "./Section/Hero/Hero";
import Navbar from "./Section/Navbar/Navbar";
import About from "./Section/About/About";
function App() {
	return (
		<main className="max-w-7xl mx-auto">
			<Navbar />
			<Hero />
			<About />
		</main>
	);
}

export default App;
