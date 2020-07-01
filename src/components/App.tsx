import { h, Fragment } from 'preact';

import Footer from './Footer';

import IconTwitter from '../icons/twitter';
import IconGitHub from '../icons/github';
import IconLinkedin from '../icons/linkedin';
import IconEmail from '../icons/email';

import './App.scss';

export default function App() {
	return (
		<Fragment>
			<main>
				<h1>Hey, I'm Adam</h1>
				<div class="card">
					<blockquote>
						I am a Software Engineer that specialises in modern, scalable web applications.
						<p>I leverage open-source technologies, automation and JavaScript to solve problems.</p>
					</blockquote>
				</div>
				<ul>
					<li><a rel="noopener noreferrer" href="https://twitter.com/adamzerella"><IconTwitter className="icon" /></a></li>
					<li><a rel="noopener noreferrer" href="https://github.com/adamzerella"><IconGitHub className="icon" /></a></li>
					<li><a rel="noopener noreferrer" href="https://www.linkedin.com/in/adam-zerella-8803ab128/"><IconLinkedin className="icon" /></a></li>
					<li><a rel="noopener noreferrer" href="mailto:hi@adamzerella.com"><IconEmail className="icon" /></a></li>
				</ul>
			</main>
			<Footer />
		</Fragment>
	);
}
