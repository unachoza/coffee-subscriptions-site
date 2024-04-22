import { Link } from "react-router-dom";
import logo from "../../assets/shared/desktop/logo.svg";
import "./Navigation.css";

const Navigation = () => {
	return (
		<div className="nav-container">
			<Link to="/">
				<img src={logo} alt="coffee beans" />
			</Link>
			<div className="links-container">
				<Link to="/">Home</Link>
				<Link to="/about">About Us</Link>
				<Link to="/plan">Create Your Plan</Link>
			</div>
		</div>
	);
};

export default Navigation;
