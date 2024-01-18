import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Error({ code, message }) {
	const navigate = useNavigate();
	const [time, setTime] = useState(3);

	useEffect(() => {
		const timer = setInterval(() => {
			setTime((prevTime) => {
				if (prevTime === 1) {
					clearInterval(timer);
					navigate("/");
				}
				return prevTime - 1;
			});
		}, 1000);

		return () => clearInterval(timer);
	}, [navigate]);
	return (
		<div className="error">
			<h1> Error</h1>
			<h2> {time} 초 후 "/"로 돌아갑니다..</h2>
			<h1>{code}</h1>
			<h2>{message}</h2>
		</div>
	);
}
export default Error;
