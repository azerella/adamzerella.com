import React, { Component } from "react";

import "./Footer.css";

/**
 * @description Bottom section of the page housing details like a signature and
 * website author name.
 * @returns {div} - Footer component as "footer"
 */
export default class Footer extends Component {
	render() {
		return (
			<footer>
				Full-stack web engineer located in Canberra, Australia.
			    <br /> <br />
				Adam Zerella &nbsp; v{this.props.meta.version} &nbsp;&nbsp;
			</footer>
		);
	}
}
