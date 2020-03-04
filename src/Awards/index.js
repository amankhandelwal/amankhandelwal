import React from 'react';
import './Awards.css';

export default class Awards extends React.Component {
	render() {
		return (
			<section id="awards" className="themegrad">
				<h1 className="section-title whitecolor">Awards</h1>
				<ul className="award-list">
					<li className="award-item">
						<div className="trophy">
							<i className="fa fa-trophy" />
							<h4 className="award-position">4th Position</h4>
						</div>
						<div className="where">
							<h3 className="award-title">Smart India Hackathon</h3>
							<p className="award-time">2018</p>
						</div>
					</li>
					<li className="award-item">
						<div className="trophy">
							<i className="fa fa-trophy" />
							<h4 className="award-position">1st Position</h4>
						</div>
						<div className="where">
							<h3 className="award-title">Innovation Meet</h3>
							<p className="award-time">Technovation- 2016</p>
						</div>
					</li>
					<li className="award-item">
						<div className="trophy">
							<i className="fa fa-trophy" />
							<h4 className="award-position">2nd Position</h4>
						</div>
						<div className="where">
							<h3 className="award-title">Stand-up Comedy</h3>
							<p className="award-time">Eclecia- 2018</p>
						</div>
					</li>
				</ul>
			</section>
		);
	}
}
