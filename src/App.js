import React, { Component } from "react";
import Footer from "./Footer";
import Content from "./Content";
import Metadata from "./Metadata";

import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="app">
				<Content />
				<Footer meta={Metadata} />
			</div>
		);
	}
}

export default App;
