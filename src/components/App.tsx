import { h } from 'preact';

import Avatar from './Avatar';
import BioLinks from './BioLinks';
import Footer from './Footer';

import './App.scss';

export interface Props {}

export default function App() {
	return (
		<div className="app">
			<Avatar />
			<BioLinks />
			<Footer />
		</div>
	);
}
