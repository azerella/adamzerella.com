import { h } from 'preact';

import pkgJson = require('../../package.json');

import './Footer.scss';

export default function Footer() {
	return <footer>{`v${pkgJson.version}`}    🍊</footer>
}
