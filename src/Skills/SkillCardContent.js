import React from 'react';
import TechItem from './../TechItem';

const CardContent = props => {
	return (
		<React.Fragment>
			<h1 className="card-title">{props.title}</h1>
			<div className="card-list-container">
				{props.items.map((item, index) => <TechItem key={index} item={item} />)}
			</div>
		</React.Fragment>
	);
};

export default CardContent;
