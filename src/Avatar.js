import React, { Component } from "react";

import AvatarIcon from "./assets/images/face.svg";
import "./Avatar.css";

/**
 * @description
 * @returns {div}
 */
export default class Avatar extends Component {
	render() {
		return (
			<div className="avatar">
				<img alt="adam icon" src={AvatarIcon} />
			</div>
		);
	}
}
