import React from "react";
import profilePic from "./profilepic1.jpg";
import "./Profile.css";

export default class Profile extends React.Component {
	render() {
		return (
			<section id="profile">
				<div className="themesolid profile-picture">
					<img
						src={profilePic}
						alt="Aman Khandelwal"
						className="profile-image"
					/>
				</div>
				<div className="profile-content">
					<About />
					<DevProfile />
				</div>
			</section>
		);
	}
}

const About = () => {
	return (
		<div className="about">
			<h1>Hi there!</h1>
			<h2 className="about-text">
				I am Aman Khandelwal. I have always had a knack for creating art from
				waste. When I found that I could create anything with code, I had to
				learn that. In a nutshell, I love making stuff. That's my drug.
			</h2>
		</div>
	);
};

const DevProfile = () => {
	if (window.innerWidth > 510)
		return (
			<div className="dev">
				<h1 className="themegrad text text1">Javascript Developer</h1>
				<h1 className="themegrad text text2">React-Native Developer</h1>
				<h1 className="themegrad text text3">FullStack Developer</h1>
				<h1 className="themegrad text text4">Android Developer</h1>
				<h1 className="themegrad text text5">Deep Learning Enthusiast</h1>
			</div>
		);
	else
		return (
			<h1 className="about-text">
				I am a Javascript Developer, a React Developer and a Deep Learning
				Enthusiast.
				<br />I am capable of FullStack Development and creating Android
				Applications.
			</h1>
		);
};
