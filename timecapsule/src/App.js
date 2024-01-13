import "./App.css";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SelectCapsule from "./pages/Capsule/SelectCapsule";
import WriteCapsule from "./pages/Capsule/WriteCapsule";

function App() {
	return (
		<div className="App">
			<div className="App-container">
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<SelectCapsule />} />
						<Route path="/capsule" element={<SelectCapsule />} />
						<Route
							path="/capsule/:capsule_name"
							element={<WriteCapsule />}
						/>
					</Routes>
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
