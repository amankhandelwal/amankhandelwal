import React from 'react';
import './NavItem.css';
import resume from './../../Resume_Aman_Khandelwal.pdf';

const NavItem = props => {
	let target = props.target || '_self';
	return (
		<a target={target} href={props.href} className="nav-item">
			<span className="nav-item-container">
				<span className="nav-item-link">
					<p className="item-text">{props.children}</p>
				</span>
			</span>
		</a>
	);
};

const NavMenu = props => {
	if (window.innerWidth > 510)
		return (
			<div className="nav-container">
				<NavItem href="#skills">Skills</NavItem>
				<NavItem href="#projects">Projects</NavItem>
				<NavItem href="#experience">Experience</NavItem>
				<NavItem href="#awards">Awards</NavItem>
				<NavItem href="#education">Education</NavItem>
				<NavItem href="#contact">Contact</NavItem>
				<NavItem target="_blank" href={resume}>
					<i className="fas fa-file-download" />&nbsp; Resume
				</NavItem>
			</div>
		);
	else
		return (
			<NavItem href="#contact">
				<i className="fas fa-file-download" />
			</NavItem>
		);
};

export default NavMenu;
