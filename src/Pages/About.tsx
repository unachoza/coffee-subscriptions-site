import data from "../data.json";
import "./Pages.css";

const About = () => {
	return (
		<>
			{data.map((section, i) => {
				const title = Object.keys(section)[0];
				const content = Object.values(section)[0];
				return (
					<div key={i} className="section">
						<div className="title">{title}</div>
						<div className="content">{content}</div>
					</div>
				);
			})}
		</>
	);
};

export default About;
