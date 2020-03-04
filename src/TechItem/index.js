import React from 'react';
import './TechItem.css';

const TechItem = props => {
	return (
		<div className="card-list-item">
			<img className="card-item-image" src={props.item.src} alt="" />
			<h2 className="card-item-title">{props.item.title}</h2>
		</div>
	);
};

export default TechItem;
