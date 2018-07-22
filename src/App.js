import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Content from "./Content";
import Metadata from "./Metadata";

import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="app">
				{/* <Header meta={Metadata} /> */}
				<Content />
				<Footer meta={Metadata} />
			</div>
		);
	}
}

export default App;
