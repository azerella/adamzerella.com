import { h } from 'preact';

import './Footer.scss';

declare const VERSION: string;

export default function Footer() {
	return <footer>{`v${VERSION}`}    🍊</footer>
}
