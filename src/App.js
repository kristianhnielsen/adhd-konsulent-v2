import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "./components/pages/about/About";
import {Helmet} from "react-helmet";
import {ThemeProvider} from "styled-components";
import {theme} from "./components/styles/Theme.styled";
import {GlobalStyles} from "./components/styles/GlobalStyles.styled";
import Home from "./components/pages/home/Home";
import Navbar from "./components/shared/navbar/Navbar";
import Contact from "./components/pages/contact/Contact";
import Consultation from "./components/pages/consultation/Consultation";
import Price from "./components/pages/price/Price";
import ErrorPage from "./components/pages/error/ErrorPage";

export default function App() {
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Helmet>
					<title>ADHD og Autisme Konsulent</title>
					<link rel="canonical" href="https://adhd-konsulent.dk/" />
				</Helmet>
				<Navbar />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/om" element={<About />} />
					<Route path="/kontakt" element={<Contact />} />
					<Route path="/radgivning" element={<Consultation />} />
					<Route path="/pris" element={<Price />} />
					<Route path="/*" element={<ErrorPage />} />
				</Routes>
			</ThemeProvider>
		</Router>
	);
}
