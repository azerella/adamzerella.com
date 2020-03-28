import { h, Component } from 'preact';

import "./App.scss";

export interface Props {}

interface State {}

export default class App extends Component<Props, State> {
	render() {
		return <h1>Hello, World!</h1>;
	}
}
