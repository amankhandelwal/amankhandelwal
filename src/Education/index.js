import React from 'react';
import './Education.css';
import { education } from '../Skillset';

export default class Education extends React.Component {
	render() {
		return (
			<section id="education">
				<h1 className="section-title themecolor">Education</h1>
				<div className="edu-list">{education.map((item, index) => <Institute {...item} key={index} />)}</div>
			</section>
		);
	}
}

const Institute = props => {
	return (
		<div className="institute">
			<img className="institute-image" src={props.icon} alt={props.types} />
			<h2>{props.types}</h2>
			<h3>{props.name}</h3>
			<p>{props.duration}</p>
			<h4>Scored: {props.score}</h4>
		</div>
	);
};
