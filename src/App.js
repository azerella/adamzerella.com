import React, { Component } from "react";
import Footer from "./Footer";
import Content from "./Content";
import Metadata from "./Metadata";
import Avatar from "./Avatar";
import ParticleAnimation from "react-particle-animation";

import { loadPolyfills } from "./helpers/polyfills";

import "./App.css";
import "./static/css/bootstrap-grid.min.css";

loadPolyfills();

class App extends Component {
	render() {
		return (
			<main>
				<ParticleAnimation
					numParticles={100}
					background={{ r: 33, g: 33, b: 33, a: 1 }} // #212121
					color={{ r: 222, g: 222, b: 77, a: 255 }} // #DEDE3D
					particleSpeed={0.25}
					interactive={false}
					style={{
						position: "absolute",
						width: "100%",
						height: "100%",
						zIndex: "-1",
					}}
				/>
				<div className="container">
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
				</div>
			</main>
		);
	}
}

export default App;
