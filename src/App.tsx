import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Plan from "./Pages/Plan";
import "./App.css";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/plan" element={<Plan />} />
		</Routes>
	);
};

export default App;
