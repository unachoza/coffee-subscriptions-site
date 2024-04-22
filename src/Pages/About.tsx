import data from "../data.json";
import "./Pages.css";

const About = () => {
	return (
		<>
			{data.map((section, i) => {
				const title = Object.keys(section)[0];
				const content = Object.values(section)[0];
				const image = Object.values(section)[1];
				console.log(title);
				return (
					<div key={i} className={`section image-container ${title}`}>
						<img src={image} alt="" />
						<div className="content-container">
							<div className="title">{title}</div>
							<div className="content">{content}</div>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default About;
