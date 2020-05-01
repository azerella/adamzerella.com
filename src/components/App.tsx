import { h } from 'preact';

import Footer from './Footer';

// import SunCircle from '../assets/img/circle.svg';

import './App.scss';

export interface Props {}

export default function App() {
	return (
		<div className="app">
			<h1>Adam Zerella</h1>
			{/* <SunCircle /> */}
			<Footer />
		</div>
	);
}
