import Hero from "./Section/Hero/Hero";
import Navbar from "./Section/Navbar/Navbar";
import About from "./Section/About/About";
import Projects from "./Section/Projects/Projects";
import Clients from "./Section/Clients/Clients";

function App() {
	return (
		<main className="max-w-7xl mx-auto">
			<Navbar />
			<Hero />
			<About />
			<Projects />
			<Clients />
		</main>
	);
}

export default App;
