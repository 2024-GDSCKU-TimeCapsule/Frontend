import "./Footer.css";
import React from "react";

import { ReactComponent as Instagram } from "./instagram.svg";

const Footer = ({ textColor = "#fff" }) => {
	return (
		<div id="footer">
			<div
				id="MadeBy"
				style={{
					color: textColor,
				}}
			>
				Made by GDSC Korea Univ.
			</div>
			<div id="link">
				<a
					href="https://www.instagram.com/gdsc.koreauniv/"
					id="insta-link"
					style={{
						color: textColor,
					}}
				>
					<Instagram fill={textColor} />
					<div style={{ width: "2px" }}></div>
					GDSC.koreauniv
				</a>
			</div>
		</div>
	);
};

export default Footer;
