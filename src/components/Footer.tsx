import { h } from 'preact';

import { version } from '../../package.json';

import './Footer.scss';

export default function Footer() {
	return <footer>
		Adelaide, Australia 🇦🇺<br /><br />
		{`v${version}`}
	</footer>
}
