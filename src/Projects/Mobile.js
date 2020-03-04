import React from 'react';
import './Mobile.css';

const Mobile = props => {
	if (window.innerWidth > 510)
		return (
			<div className="mobile-container">
				<span className="mobile">
					<div className="mobile-speaker" />
						<img src={props.item.images} className="screenshot" alt={props.item.title} />
					<div className="mobile-button" />
				</span>
			</div>
		);
	else return null;
};

export default Mobile;
