import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Profile from './Profile';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';
import Contact from './Contact';
import Awards from './Awards';
import Footer from './footer';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Profile />
				<Skills />
				<Projects />
				<Experience />
				<Awards />
				<Education />
				<Contact />
				<Footer />
			</div>
		);
	}
}

export default App;
