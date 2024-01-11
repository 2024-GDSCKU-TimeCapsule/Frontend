import "./Header.css";
import React from "react";

import backIcon from "./img/backIcon.svg";
const Header = ({ pageName = "MY CAPSULE" }) => {
	return (
		<>
			<div className="header-container">
				<img className="backIcon" src={backIcon} alt="backIcon" />
				<div className="pageName">{pageName}</div>
			</div>
		</>
	);
};

export default Header;
