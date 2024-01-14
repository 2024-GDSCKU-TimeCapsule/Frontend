import "./Header.css";
import React from "react";

import backIcon from "./img/backIcon.svg";
const Header = ({ pageName = "MY CAPSULE", backURL = "/main" }) => {
	return (
		<>
			<div className="header-container">
				<button
					className="backButton"
					type="button"
					onClick={() => {
						window.location.href = backURL;
					}}
				>
					<img className="backIcon" src={backIcon} alt="backIcon" />
				</button>

				<div className="pageName">{pageName}</div>
			</div>
		</>
	);
};

export default Header;
