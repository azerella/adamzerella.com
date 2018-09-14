import React, { Component } from "react";
import Footer from "./Footer";
import Content from "./Content";
import Metadata from "./Metadata";
import Avatar from "./Avatar";

import "./App.css";

import "./static/css/bootstrap-grid.min.css";

class App extends Component {
	render() {
		return (
			<main className="container">
				<div className="row">
					<div className="col col-avatar">
						<Avatar />
					</div>
					<div className="col">
						<Content />
					</div>
				</div>
				<div className="row">
					<Footer meta={Metadata} />
				</div>
			</main>
		);
	}
}

export default App;
