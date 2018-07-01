import React, { Component } from "react";
import Avatar from "./Avatar";

import GitHubIcon from "./assets/images/github512.png";
import LinkedInIcon from "./assets/images/linkedin512.png";
import DocumentIcon from "./assets/images/document512.png";
import DownloadIcon from "./assets/images/download512.png";

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
				<div className="content-row">
					<Avatar />
					<div className="icon-wrapper">
						<a
							className="link-github"
							href="https://github.com/adamzerella"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								className="icon"
								alt="github icon"
								src={GitHubIcon}
							/>
						</a>
						<a
							className="link-linkedin"
							href="https://www.linkedin.com/in/adam-zerella-8803ab128/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								className="icon"
								alt="linkedin icon"
								src={LinkedInIcon}
							/>
						</a>
						<div className="link-document">
							<img
								className="icon"
								alt="document icon"
								src={DocumentIcon}
							/>
							<div className="link-document-wrapper">
								<a
									className="link-document-text"
									href="./assets/content/Adam A. Zerella - Resume.txt"
									download
								>
									TEXT
									<img
										className="icon"
										alt="text document download"
										src={DownloadIcon}
									/>
								</a>
								<br />
								<a
									className="link-document-html"
									href="./assets/content/Adam A. Zerella - Resume.html"
									download
								>
									HTML
									<img
										className="icon"
										alt="html document download"
										src={DownloadIcon}
									/>
								</a>
								<br />
								<a
									className="link-document-pdf"
									href="./assets/content/Adam A. Zerella - Resume.pdf"
									download
								>
									PDF
									<img
										className="icon"
										alt="pdf document download"
										src={DownloadIcon}
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
