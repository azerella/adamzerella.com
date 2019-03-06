import React, { Component } from "react";

import GitHubIcon from "./assets/images/github.svg";
import LinkedInIcon from "./assets/images/linkedin.svg";
import MailIcon from "./assets/images/mail.svg";
import TwitterIcon from "./assets/images/twitter.svg";

import "./Content.css";

/**
 * @description Core section of the page housing details like website author
 * avatar and portfolio links.
 * @returns {div} - Footer component as "footer"
 */
export default class Content extends Component {
	render() {
		return (
			<div className="content">
				<div className="row">
					<div className="col-sm-4 offset-4">
						<a
							className="link-github"
							href="https://github.com/adamzerella"
							target="_blank"
							rel="noopener noreferrer"
							title="Go to Adam Zerella's Github"
						>
							<img
								className="img-thumbnail"
								alt="github icon"
								src={GitHubIcon}
							/>
						</a>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-4 offset-4">
						<a
							className="link-linkedin"
							href="https://www.linkedin.com/in/adam-zerella-8803ab128/"
							target="_blank"
							rel="noopener noreferrer"
							title="Go to Adam Zerella's linkedin"
						>
							<img
								className="img-thumbnail"
								alt="linkedin icon"
								src={LinkedInIcon}
							/>
						</a>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-4 offset-4">
						<a
							className="link-email"
							href="mailto:hello@adamzerella.com"
							target="_top"
							title="Email Adam Zerella"
						>
							<img
								className="img-thumbnail"
								alt="email icon"
								src={MailIcon}
							/>
						</a>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-4 offset-4">
						<a
							className="link-twitter"
							href="https://twitter.com/adamzerella"
							target="_top"
							title="Go to Adam Zerella's Twitter"
						>
							<img
								className="img-thumbnail"
								alt="twitter icon"
								src={TwitterIcon}
							/>
						</a>
					</div>
				</div>
			</div>
		);
	}
}
