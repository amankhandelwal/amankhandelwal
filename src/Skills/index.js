import React from 'react';
import Card from './../Card';
import CardContent from './SkillCardContent.js';
import './Skills.css';
import { skillset } from './../Skillset';

export default class Skills extends React.Component {
	render() {
		return (
			<section id="skills" className="themegrad">
				<h1 className="section-title whitecolor">Skills</h1>
				<div className="skillset">
					{Card(<CardContent title="FrontEnd" items={skillset.frontend} />)}
					{Card(<CardContent title="Backend" items={skillset.backend} />)}
					{Card(<CardContent title="Mobile Dev" items={skillset.mobiledev} />)}
					{Card(<CardContent title="Deep Learning" items={skillset.deeplearning} />)}
					{Card(<CardContent title="DBMS" items={skillset.dbms} />)}
					{Card(<CardContent title="Languages" items={skillset.languages} />)}
				</div>
			</section>
		);
	}
}
