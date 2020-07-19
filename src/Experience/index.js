import React from 'react';
import './Experience.css';
import Card from './../Card';
import { internships } from '../Skillset';
import coursera from '../Skillset/icon/coursera logo.png';

export default class Experience extends React.Component {
	render() {
		return (
			<section id="experience" className="themegrad">
				<h1 className="section-title whitecolor">Work Experience</h1>
				<div className="exp-list">
					{internships.map((item, index) => Card(<InternshipItem {...item} key={index} />))}
					{Card(<TrainingItem />)}
				</div>
			</section>
		);
	}
}
const InternshipItem = props => {
	return (
		<div className="exp-card">
			<h1 className="card-title">{/*props.title*/}</h1>
			<img className="exp-logo" src={props.image} alt={props.title} />
			<h2 className="card-subtitle">{props.designation}</h2>
			<h3 className="duration">{props.duration}</h3>
			{props.description}
		</div>
	);
};

const TrainingItem = () => {
	return (
		<div className="exp-card">
			<h1 className="card-title">{/*Coursera*/}</h1>
			<img className="exp-logo" src={coursera} alt={'coursera'} />
			<h2 className="card-subtitle"> Deep Learning Specialization</h2>
			<h3 className="duration">June 2017 - Feb 2018</h3>
			<ul className="course-list">
				<LiA url={`https://www.coursera.org/account/accomplishments/certificate/WWKS4ZVRHZLY`}>
					Neural Network and Deep Learning
				</LiA>
				<li className="exp-list-item">Hyperparameter tuning, Regularization and Optimization</li>
				<li className="exp-list-item">Structuring Machine Learning Projects</li>
				<LiA url={`https://www.coursera.org/account/accomplishments/certificate/37RU3DYXZ65P`}>
					Convolutional Neural Networks
				</LiA>
				<LiA url={`https://www.coursera.org/account/accomplishments/certificate/YEJ26QYVWSNW`}>
					Sequence Models
				</LiA>
			</ul>
		</div>
	);
};

const LiA = props => (
	<li className="exp-list-item">
		<a target="_blank" href={props.url}>
			{props.children}
		</a>
	</li>
);
