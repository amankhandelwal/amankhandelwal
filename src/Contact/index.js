import React from "react";
import "./Contact.css";

export default class Experience extends React.Component {
	render() {
		return (
			<section id="contact" className="themegrad">
				<h1 className="section-title whitecolor">Contact Me</h1>
				<ul className="contact-list">
					<li className="contact-list-item">
						<a
							target="_blank"
							rel="noopener noreferrer"
							title="Email"
							href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=aman.khandelwal.howrah@gmail.com&su=Hello&shva=1"
						>
							<i className="fa fa-envelope" aria-hidden="true" />
						</a>
					</li>
					<li className="contact-list-item">
						<a
							target="_blank"
							rel="noopener noreferrer"
							title="Github"
							href="https://github.com/amankhandelwal"
						>
							<i className="fa fa-github" aria-hidden="true" />
						</a>
					</li>
					<li className="contact-list-item">
						<a
							target="_blank"
							rel="noopener noreferrer"
							title="LinkedIn"
							href="http://www.linkedin.com/in/AmanKhandelwal1997"
						>
							<i className="fa fa-linkedin" aria-hidden="true" />
						</a>
					</li>
					<li className="contact-list-item">
						<a
							target="_blank"
							rel="noopener noreferrer"
							title="Facebook"
							href="https://www.facebook.com/amankhandelwal1997"
						>
							<i className="fa fa-facebook" aria-hidden="true" />
						</a>
					</li>
					<li className="contact-list-item">
						<a
							target="_blank"
							rel="noopener noreferrer"
							title="Google Plus"
							href="https://plus.google.com/u/0/+AmanKhandelwal1997"
						>
							<i className="fa fa-google-plus" aria-hidden="true" />
						</a>
					</li>
					<li className="contact-list-item">
						<a
							target="_blank"
							title="Medium"
							rel="noopener noreferrer"
							href="https://medium.com/@aman.khandelwal.howrah"
						>
							<i className="fa fa-medium" aria-hidden="true" />
						</a>
					</li>
				</ul>
			</section>
		);
	}
}
