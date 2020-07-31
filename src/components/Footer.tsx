import { h } from 'preact';

import IconTwitter from '../icons/twitter';
import IconGitHub from '../icons/github';
import IconLinkedin from '../icons/linkedin';
import IconEmail from '../icons/email';

import './Footer.scss';

declare const VERSION: string;

export default function Footer() {
	return <footer>
		<ul>
			<li><a rel="noopener noreferrer" href="https://twitter.com/adamzerella"><IconTwitter className="icon" /></a></li>
			<li><a rel="noopener noreferrer" href="https://github.com/adamzerella"><IconGitHub className="icon" /></a></li>
			<li><a rel="noopener noreferrer" href="mailto:hi@adamzerella.com"><IconEmail className="icon" /></a></li>
			<li><a rel="noopener noreferrer" href="https://www.linkedin.com/in/adam-zerella-8803ab128/"><IconLinkedin className="icon" /></a></li>
		</ul>
		{`v${VERSION}`}
	</footer>
}
