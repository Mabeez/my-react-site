import "./App.css";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Intro from "./Components/Intro";
import Products from "./Components/Products";
import About from "./Components/About";
import Contact from "./Components/Contact";
import WelcomeMessage from "./Components/WelcomeMessage";
import Footer from "./Components/Footer";

function App() {
	return (
		<>
			<WelcomeMessage />
			<Header />
			<Nav />
			<Intro />
			<Products />
			<About />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
