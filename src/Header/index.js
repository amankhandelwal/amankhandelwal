import React, { Component } from 'react';
import './Header.css';
import NavMenu from './NavItem';

export default class Header extends Component {
	render() {
		return (
			<nav className="header themesolid">
				<a className="logo-link" href="/">
					<h1 className="logo">Aman Khandelwal</h1>
				</a>
				<NavMenu />
			</nav>
		);
	}
}
