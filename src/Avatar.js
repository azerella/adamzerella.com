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
				<div className="row ">
					<div className="col-lg-8 offset-2">
						<a href="/" title="Go to homepage">
							<img
								className="img-responsive"
								alt="adam icon"
								src={AvatarIcon}
							/>
						</a>
					</div>
				</div>
			</div>
		);
	}
}
