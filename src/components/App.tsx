import { h, Fragment } from 'preact';

import Footer from './Footer';

import './App.scss';

export default function App() {
	return (
		<Fragment>
			<main>
				<h1>Hey, I'm Adam</h1>
				<div class="card">
					<blockquote>I'm a Software Engineer that specialises in modern, scalable web applications.</blockquote>
				</div>
			</main>
			<Footer />
		</Fragment>
	);
}
