import "./App.css";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SelectCapsule from "./pages/Capsule/SelectCapsule";
import WriteCapsule from "./pages/Capsule/WriteCapsule";
import Main from "./pages/Main/Main/Main";
import Mypage from "./pages/Main/Mypage/Mypage";
import Nickname from "./pages/Main/Nickname/Nickname";
import Withdraw from "./pages/Main/Withdraw/Withdraw";

function App() {
	return (
		<div className="App">
			<div className="App-container">
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Main />} />
						<Route path="/capsule" element={<SelectCapsule />} />
						<Route
							path="/capsule/:capsule_name"
							element={<WriteCapsule />}
						/>
						<Route path="/main" element={<Main />} />
						<Route path="/mypage" element={<Mypage />} />
						<Route path="/nickname" element={<Nickname />} />
						<Route path="/withdraw" element={<Withdraw />} />
					</Routes>
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
