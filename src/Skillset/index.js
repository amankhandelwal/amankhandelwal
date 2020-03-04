import React from "react";
//frontend
import html from "./icon/html.png";
import css from "./icon/css.png";
import js from "./icon/js.png";
import rct from "./icon/react.png";
import rdx from "./icon/redux.png";
import bootstrap from "./icon/bootstrap.jpg";
import electron from "./icon/electron.png";
import pwa from "./icon/pwa.png";
import jq from "./icon/jquery.png";

//backend
import node from "./icon/node.jpg";
import flask from "./icon/flask.png";
import php from "./icon/php.png";

//mobiledev
import android from "./icon/android.jpg";

//deeplearning
import nn from "./icon/neuralnet.png";
import tf from "./icon/tf.jpg";
import numpy from "./icon/numpy.png";
import pandas from "./icon/pandas.png";

//DBMS
import mysql from "./icon/mysql.png";
import nosql from "./icon/nosql.png";
import firebase from "./icon/firebase.jpg";
import mongodb from "./icon/mongodb.jpg";

//languages
import java from "./icon/java.png";
import python from "./icon/python.png";
import c from "./icon/c.png";
import cpp from "./icon/cpp.png";

//Projects
import autogram from "./icon/autogram.jpg";
import sih from "./icon/SIH.jpg";
import when from "./icon/when.png";
import sudoku from "./icon/sudoku.png";
import hulladek from "./icon/hulladek.jpg";
import movify from "./icon/movify.png";
import devconnector from "./icon/devconnector.png";
import markdown from "./icon/markdown.png";
// import knowaman from "./icon/knowaman.png";

//Education
import school from "./icon/school.png";
import highschool from "./icon/highschool.png";
import college from "./icon/college.png";

//Internships
import autogramlogo from "./icon/autogram logo.png";
import hulladeklogo from "./icon/hulladek logo.png";

const skillset = {
	frontend: [
		{ title: "HTML", src: html },
		{ title: "CSS/SCSS", src: css },
		{ title: "Javascript", src: js },
		{ title: "React JS", src: rct },
		{ title: "Redux", src: rdx },
		{ title: "Electron JS", src: electron },
		{ title: "Bootstrap & Jquery", src: bootstrap }
	],
	backend: [
		{ title: "NodeJS", src: node },
		{ title: "Express", src: node },
		{ title: "Python- Flask", src: flask },
		{ title: "PHP", src: php }
	],
	deeplearning: [
		{ title: "Neural Network", src: nn },
		{ title: "Convolutional Nets", src: nn },
		{ title: "Sequence Models", src: nn },
		{ title: "Tensorflow", src: tf },
		{ title: "Numpy", src: numpy },
		{ title: "Pandas", src: pandas }
	],
	dbms: [
		{ title: "MongoDB", src: mongodb },
		{ title: "NoSQL", src: nosql },
		{ title: "MySQL", src: mysql },
		{ title: "Firebase", src: firebase }
	],
	mobiledev: [
		{ title: "React-Native", src: rct },
		{ title: "Progressive Web Apps", src: pwa },
		{ title: "Android Studio", src: android },
		{ title: "Java and XML", src: java }
	],
	languages: [
		{ title: "Python", src: python },
		{ title: "Java", src: java },
		{ title: "C", src: c },
		{ title: "C++", src: cpp }
	]
};

const projectset = [
	{
		title: "Autogram Mobile App",
		images: autogram,
		summary: (
			<div>
				<p>
					Developed the Autogram Application on React Native.
					<br />
					Implemented features like :
				</p>
				<ul>
					<li>Audio/ Video Recording and playback</li>
					<li>CRUD operations using an API</li>
					<li>Complex pages to display User Resume in an attractive manner</li>
				</ul>
			</div>
		),
		techstack: [
			{ title: "React-Native", src: rct },
			{ title: "Redux", src: rdx }
		],
		link: [{ text: "Cannot share any Link (NDA)", url: "/" }]
	},
	{
		title: "12 Hour Challenges",
		images: movify,
		summary: (
			<section>
				<p>
					<strong>About: </strong>
					HackerEarth hosts several 12 Hour Challenges wherein participants are
					required to work on a problem statement and build a Front-End
					Application in 12 hours.
				</p>
				<div>
					<h3>Movify</h3>
					<p>
						Movify is built with React that uses a movies API and some scraped
						data to render a responsive Movie Search Interface. The app features
						Real Time Search with several filters and sorting options,
						Pagination controls along with Number of results per page selection,
						Split Screen Detailed View with different Views for Mobile and
						Desktop
					</p>
				</div>
				<div>
					<h3>Sumo File Manager</h3>
					<p>
						Sumo File Manager is an online File System front end. The file tree
						is provided over an API and Sumo File Manager is responsible for the
						Front-End Navigation View.
					</p>
				</div>
			</section>
		),
		techstack: [
			{ title: "React", src: rct },
			{ title: "HTML", src: html },
			{ title: "CSS", src: css },
			{ title: "Javascript", src: js },
			{ title: "Python", src: python }
		],
		link: [
			{
				text: "Movify Web App",
				url: `https://coffee-shop-d6741.firebaseapp.com/`
			},
			{
				text: "Movify Github Repo",
				url: `https://github.com/amankhandelwal/Movify`
			},
			{
				text: "SumoFile Web App",
				url: `https://kommunity-9c619.firebaseapp.com/`
			},
			{
				text: "SumoFile Github Repo",
				url: `https://github.com/amankhandelwal/SumoFileManager`
			}
		]
	},
	{
		title: "Social Media",
		images: devconnector,
		summary: (
			<div>
				<p>Developed while learning MERN stack development.</p>
				<ul>
					<li>Login using JWT and Passport JS</li>
					<li>Created an API using express for various CRUD operations</li>
					<li>Maintained a single store for state management</li>
					<li>Users can Post, Like, Comment and View Profiles.</li>
				</ul>
			</div>
		),
		techstack: [
			{ title: "MongoDb", src: mongodb },
			{ title: "Express", src: node },
			{ title: "React", src: rct },
			{ title: "Redux", src: rdx },
			{ title: "Node JS", src: node },
			{ title: "HTML", src: html },
			{ title: "CSS", src: css },
			{ title: "Javascript", src: js }
		],
		link: [
			{
				text: "Github Repo",
				url: `https://github.com/amankhandelwal/SocialMedia`
			},
			{
				text: "Website",
				url: `https://glacial-tor-52106.herokuapp.com`
			}
		]
	},
	{
		title: "Challan Generation System",
		images: sih,
		summary: (
			<div>
				<p>Developed as part of Smart India Hackathon Project.</p>
				<ul>
					<li>
						Created a Facebook messenger Chatbot for registering Citizen
						complaints
					</li>
					<li>
						Created an Android App to generate challans and fetch the License
						Plate number from vehicle images
					</li>
					<li>
						Created a Website for Fine payment, Complaint registration,
						Complaint Verification
					</li>
					<li>
						Proposal to use BlockChain to prevent SPAM and Fake-Complaints.
					</li>
				</ul>
			</div>
		),
		techstack: [
			{ title: "HTML", src: html },
			{ title: "CSS", src: css },
			{ title: "Javascript", src: js },
			{ title: "Python- Flask", src: flask },
			{ title: "MySQL", src: mysql },
			{ title: "Android Studio", src: android },
			{ title: "Java and XML", src: java },
			{ title: "Python", src: python }
		],
		link: [
			{ text: "Github Repo", url: `https://github.com/amankhandelwal/SIH` },
			{
				text: "Slides",
				url: `https://docs.google.com/presentation/d/1r348sEYZwHz7J6lMgFpX3GEXNPjRHWUYVcDBX6zNpA0/edit?usp=sharing`
			}
		]
	},
	{
		title: "When- College Buddy",
		images: when,
		summary: (
			<div>
				<p>Developed an Android Application that :</p>
				<ul>
					<li>Keep track of your attendance</li>
					<li>Check your college timetable.</li>
					<li>Added features such as announcements and Voting</li>
				</ul>
			</div>
		),
		techstack: [
			{ title: "PHP", src: php },
			{ title: "MySQL", src: mysql },
			{ title: "Android Studio", src: android },
			{ title: "Java and XML", src: java }
		],
		link: [
			{
				text: "Google Playstore",
				url: `https://play.google.com/store/apps/details?id=com.when.threemb.when`
			},
			{
				text: "Slides",
				url: `https://docs.google.com/presentation/d/1OBJGI7qhXI3QH7dcaVzQVVv3mAxf04LuFnnDXaP2V0k/edit?usp=sharing`
			}
		]
	},
	{
		title: "Sudoku",
		images: sudoku,
		summary: (
			<p>
				The classical game of sudoku with an attractive and friendly user
				interface.
			</p>
		),
		techstack: [
			{ title: "Android Studio", src: android },
			{ title: "Java and XML", src: java }
		],
		link: [
			{
				text: "Google Playstore",
				url: `https://play.google.com/store/apps/details?id=com.threemb.rohitagarwal.sudoku`
			}
		]
	},
	{
		title: "Hulladek Website",
		images: hulladek,
		summary: <p>Developed a Responsive Website for Hulladek.</p>,
		techstack: [
			{ title: "HTML", src: html },
			{ title: "CSS", src: css },
			{ title: "Javascript", src: js },
			{ title: "Bootstrap", src: bootstrap },
			{ title: "JQuery", src: jq }
		],
		link: [{ text: "Website", url: `http://hulladek.in/home.php` }]
	},
	{
		title: "Markdown Editor",
		images: markdown,
		summary: (
			<div>
				<p>This was my First Electron JS application</p>
				<ul>
					<li>Real Time Markdown Edit and Preview</li>
					<li>New/Open/Save Options for Markdown files</li>
					<li>
						Editor updates markup even if files are modified somewhere else
					</li>
				</ul>
			</div>
		),
		techstack: [
			{ title: "Electron JS", src: electron },
			{ title: "HTML", src: html },
			{ title: "CSS", src: css },
			{ title: "Javascript", src: js },
			{ title: "Node JS", src: node }
		],
		link: [
			{
				text: "Github Repo",
				url: `https://github.com/amankhandelwal/MarkdownEditor`
			}
		]
	}
	/* ,{
		title: "Know Aman",
		images: knowaman,
		summary: (
			<p>
				Conventional Resumes are boring and mainstream. Know Aman is an android
				portfolio app.
			</p>
		),
		techstack: [
			{ title: "Android Studio", src: android },
			{ title: "Java and XML", src: java }
		],
		link: [
			{
				text: "Google Playstore",
				url: `https://play.google.com/store/apps/details?id=com.when.threemb.portfolio`
			}
		]
	} */
];

const internships = [
	{
		title: "Hulladek Recycling",
		designation: "Web Developer Intern",
		duration: "July 2016 - August 2016",
		description: (
			<p className="exp-desc">
				Developed a responsive website for Hulladek.
				<br />
				(Details in <a href="#projects">Project</a> Section)
			</p>
		),
		image: hulladeklogo
	},
	{
		title: "Autogram Technosoft Pvt. Ltd.",
		designation: "React Native Developer Intern",
		duration: "June 2018 - July 2018",
		description: (
			<p className="exp-desc">
				Developed the Autogram Mobile Application on React Native.
				<br />
				(Details in <a href="#projects">Project</a> Section)
			</p>
		),
		image: autogramlogo
	}
];

const education = [
	{
		icon: school,
		types: "Primary School",
		name: "M.C.Kejriwal Vidyapeeth",
		duration: "2000 - 2013",
		score: "91.9%"
	},
	{
		icon: highschool,
		types: "High School",
		name: "Hariyana Vidya Mandir",
		duration: "2013 - 2015",
		score: "78.6%"
	},
	{
		icon: college,
		types: "College",
		name: "Heritage Institute of Technology",
		duration: "2015 - 2019",
		score: "8.44%"
	}
];

export { skillset, projectset, internships, education };
