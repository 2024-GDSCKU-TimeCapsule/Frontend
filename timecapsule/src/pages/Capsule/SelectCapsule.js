import "./SelectCapsule.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

function SelectCapsule() {
	const [capsule_name, setCapsuleName] = useState("");

	const handleCapsuleNameChange = (e) => {
		setCapsuleName(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(capsule_name);
	};

	return (
		<div className="select-capsule">
			<Link to="/">Back to home</Link>
			<h1>Select a capsule</h1>
			<Swiper
				slidesPerView={2}
				spaceBetween={30}
				centeredSlides={true}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination]}
				className="mySwiper"
			>
				<SwiperSlide>Slide 1</SwiperSlide>
				<SwiperSlide>Slide 2</SwiperSlide>
				<SwiperSlide>Slide 3</SwiperSlide>
			</Swiper>
			<form onSubmit={handleSubmit}>
				<label htmlFor="capsule_name">Capsule name</label>
				<input
					type="text"
					id="capsule_name"
					name="capsule_name"
					value={capsule_name}
					onChange={handleCapsuleNameChange}
				/>
				<button
					type="submit"
					onClick={() => {
						window.location.href = "/capsule/" + capsule_name;
					}}
				>
					Submit
				</button>
			</form>
		</div>
	);
}

export default SelectCapsule;
