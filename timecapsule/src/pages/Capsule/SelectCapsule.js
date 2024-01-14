import "./SelectCapsule.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import Header from "../../components/Layout/Header/Header";
import Footer from "../../components/Layout/Footer/Footer";

import goal_capsule from "./images/goal_capsule.png";
import memory_capsule from "./images/memory_capsule.png";
import letter_capsule from "./images/letter_capsule.png";

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
			<Header />
			<div className="swiper-subtitle">1년 뒤 나에게 보내는 선물</div>
			<Swiper
				effect={"coverflow"}
				grabCursor={true}
				slidesPerView={2}
				spaceBetween={0}
				centeredSlides={true}
				coverflowEffect={{
					rotate: 0,
					stretch: -20,
					depth: 0,
					modifier: 1,
					slideShadows: false,
				}}
				pagination={{
					clickable: true,
				}}
				modules={[EffectCoverflow, Pagination]}
				className="mySwiper"
			>
				{[memory_capsule, goal_capsule, letter_capsule].map(
					(capsule, index) => (
						<SwiperSlide key={index}>
							<div className="swiper-title">
								{
									{
										0: "MEMORY",
										1: "GOAL",
										2: "LETTER",
									}[index]
								}
							</div>

							<img src={capsule} alt="goal capsule" />
						</SwiperSlide>
					)
				)}
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
					className="make-capsule-button"
					onClick={() => {
						window.location.href = "/capsule/" + capsule_name;
					}}
				>
					+ 타임캡슐 만들기
				</button>
			</form>
			<Footer />
		</div>
	);
}

export default SelectCapsule;
