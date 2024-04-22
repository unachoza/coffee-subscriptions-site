import { Link } from "react-router-dom";
import logo from "/assets/shared/desktop/logo.svg";
import facebook from "/assets/shared/desktop/icon-facebook.svg";
import instagram from "/assets/shared/desktop/icon-instagram.svg";
import twitter from "/assets/shared/desktop/icon-twitter.svg";
import "../Navigation/Navigation.css";

const Footer = () => {
	return (
		<div className="footer">
			<Link className="logo" to="/">
				<img src={logo} alt="coffee beans" />
			</Link>
			<div className="links-container">
				<Link to="/">Home</Link>
				<Link to="/about">About Us</Link>
				<Link to="/plan">Create Your Plan</Link>
			</div>
			<div className="socials-container">
				<img src={facebook} alt="facebook icon" />
				<img src={instagram} alt="instagram icon" />
				<img src={twitter} alt="twitter icon" />
			</div>
		</div>
	);
};

export default Footer;
