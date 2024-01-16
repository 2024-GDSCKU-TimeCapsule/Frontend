import "./Mycapsule.css";

import { leftdays } from "./Capsuledata";
import { motion, AnimatePresence } from "framer-motion";

function Modal({ modal }) {
	return (
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<AnimatePresence>
				{modal && (
					<motion.div
						initial={{
							opacity: 0,
							y: 400,
						}}
						animate={{
							opacity: 1,
							y: 0,
							transition: {
								duration: 0.3,
								ease: "easeOut",
							},
						}}
						exit={{
							opacity: 0,
							y: 400,
							transition: {
								ease: "easeIn",
							},
						}}
						className="modal2"
						onClick={(e) => {
							e.stopPropagation();
						}}
					>
						<div>
							<div className="text1">봉인된 타임캡슐</div>
							<div className="text2">봉인 해제까지 남은 시간</div>
							<div className="text3">D-{leftdays()}</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
// 모달창

function Buttonconfirm({ modal }) {
	return (
		<div>
			<AnimatePresence>
				{modal && (
					<motion.div
						initial={{
							opacity: 0,
							y: 400,
						}}
						animate={{
							opacity: 1,
							y: 0,
							transition: {
								duration: 0.3,
								ease: "easeOut",
							},
						}}
						exit={{
							opacity: 0,
							y: 400,
							transition: {
								ease: "easeIn",
							},
						}}
					>
						<button type="button" className="confirmbutton">
							확인
						</button>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

const closemodal = ({ setModal, setContainer, container }) => {
	if (container === "mycapsule-container-modal") {
		setModal(false);
		setContainer("mycapsule-container");
	}
}; // 모달창 외부(확인버튼 포함)를 클릭해서 모달창 닫기

const openmodal = ({ setModal, setContainer, blur }) => {
	if (blur === "blurring") {
		setModal(true);
		setContainer("mycapsule-container-modal");
	}
}; // 블러처리된 화면을 클릭해서 모달창 열기

export { Modal, closemodal, openmodal, Buttonconfirm };
