import React from 'react';
import './Projects.css';
import { projectset } from './../Skillset';
import TechItem from './../TechItem';
import Mobile from './Mobile';

export default class Projects extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			index: 0
		};

		this.handleItemSelected = this.handleItemSelected.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleItemSelected = index => {
		this.setState({ index });
	};

	handleChange(event) {
		this.setState({ index: event.target.value });
	}

	renderProjectList = () => {
		if (window.innerWidth > 510)
			return (
				<div className="project-list">
					<ul>
						{projectset.map((item, index) => (
							<Item
								key={index}
								item={item}
								selected={this.state.index}
								id={index}
								onClick={() => this.handleItemSelected(index)}
							/>
						))}
					</ul>
				</div>
			);
		else
			return (
				<React.Fragment>
					<p className="hint-text">Check Out using this Drop Down Menu </p>
					<select className="selector themesolid" value={this.state.index} onChange={this.handleChange}>
						{projectset.map((item, index) => (
							<option value={index} id={index}>
								{item.title}
							</option>
						))}
					</select>
				</React.Fragment>
			);
	};

	render() {
		return (
			<section id="projects">
				<h1 className="section-title themecolor">Projects</h1>
				<div className="project-list-container">
					{this.renderProjectList()}
					<Summary item={projectset[this.state.index]} />
					<Mobile item={projectset[this.state.index]} />
				</div>
			</section>
		);
	}
}

const Summary = props => {
	return (
		<div className="project-summary">
			<h2>{props.item.title}</h2>
			<div className="summary-text">{props.item.summary}</div>
			<h4>Technology stack:</h4>
			<div className="techstack-container">
				{props.item.techstack.map((item, index) => (
					<span key={index} className="padd">
						<TechItem item={item} />
					</span>
				))}
			</div>
			<h4>Project Links:</h4>
			<div className="techstack-container">
				{props.item.link.map((item, index) => (
					<a target="_blank" rel="noopener noreferrer" href={item.url} key={index} className="links">
						{item.text}
					</a>
				))}
			</div>
		</div>
	);
};

const Item = props => {
	let styles = props.selected === props.id ? 'project-item active themesolid' : 'project-item inactive';
	return (
		<li className={styles} id={props.id} onClick={props.onClick}>
			{props.item.title}
		</li>
	);
};
