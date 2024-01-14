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
	const [capsuleName, setCapsuleName] = useState("memory");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(capsuleName);
	};

	const capsuleList = ["memory", "goals", "letter"];

	return (
		<div className="select-capsule">
			<Header />
			<div>
				<div className="swiper-title">{capsuleName.toUpperCase()}</div>
				<div className="swiper-subtitle">1년 뒤 나에게 보내는 선물</div>
			</div>
			<Swiper
				effect={"coverflow"}
				grabCursor={true}
				slidesPerView={2}
				spaceBetween={0}
				onSlideChange={(swiper) => {
					setCapsuleName(capsuleList[swiper.activeIndex]);
				}}
				centeredSlides={true}
				coverflowEffect={{
					rotate: 0,
					stretch: -20,
					depth: 0,
					modifier: 1,
					slideShadows: false,
				}}
				modules={[EffectCoverflow, Pagination]}
				className="mySwiper"
			>
				{[memory_capsule, goal_capsule, letter_capsule].map(
					(capsule, index) => (
						<SwiperSlide key={index}>
							<img src={capsule} alt="goal capsule" />
						</SwiperSlide>
					)
				)}
			</Swiper>
			<button
				type="submit"
				className="make-capsule-button"
				onClick={() => {
					window.location.href = "/capsule/" + capsuleName;
				}}
			>
				+ 타임캡슐 만들기
			</button>
			<Footer textColor="#D6D6D6" />
		</div>
	);
}

export default SelectCapsule;
