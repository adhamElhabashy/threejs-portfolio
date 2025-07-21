import Hero from "./Section/Hero/Hero";
import Navbar from "./Section/Navbar/Navbar";
import About from "./Section/About/About";
import Projects from "./Section/Projects/Projects";
import Clients from "./Section/Clients/Clients";
import Contact from "./Section/Contact/Contact";
import Footer from "./Section/Footer/Footer";
import Experience from "./Section/Experience/Experience";

function App() {
	return (
		<main className="max-w-7xl mx-auto">
			<Navbar />
			<Hero />
			<About />
			<Projects />
			<Clients />
			<Experience />
			<Contact />
			<Footer />
		</main>
	);
}

export default App;
