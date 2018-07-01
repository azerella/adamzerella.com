import React, { Component } from "react";

import SignatureIcon from "./assets/images/signature.svg";
import "./Footer.css";

/**
 * @description Bottom section of the page housing details like a signature and
 * website author name.
 * @returns {div} - Footer component as "footer"
 */
export default class Footer extends Component {
	constructor(props) {
		super();
	}

	render() {
		return (
			<div className="footer">
				Adam Zerella &nbsp; v{this.props.meta.version} &nbsp;&nbsp;
				<img alt="adam signature" src={SignatureIcon} />
			</div>
		);
	}
}
