import React, { Component } from "react";

// import "./Header.css";

/**
 * @description Top section of the page housing details like technical details
 * @returns {div} - Header component as "header"
 */
export default class Header extends Component {
	constructor(props) {
		super();
	}

	render() {
		return (
			<div className="header">
				<span className="data">
					<table>
						<tbody>
							<tr>
								<td>NODE ENV: {this.props.meta.environment}</td>
								<td>VERSION: {this.props.meta.version}</td>
								<td>
									NODE DEPENDENCIES:{" "}
									{this.props.meta.dependencies}
								</td>
								<td>
									BUNDLE SIZE: {this.props.meta.bundleSize}
								</td>
							</tr>
						</tbody>
					</table>
				</span>
			</div>
		);
	}
}
