import { h, Fragment } from 'preact';

import Header from './Header';
import Footer from './Footer';

import './App.scss';

export interface Props {}

export default function App() {
	return (
		<Fragment>
			<Header 
				text="Adam Zerella"
				subHeading="Software engineer from Adelaide, Australia"
			/>
			<ul>
				<li><a href="#" alt="todo">twitter</a></li>
				<li><a href="#" alt="todo">github</a></li>
				<li><a href="#" alt="todo">linkedin</a></li>
				<li><a href="#" alt="todo">email</a></li>
			</ul>
			<Footer />
		</Fragment>
	);
}
