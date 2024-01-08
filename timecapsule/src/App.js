import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";

import SelectCapsule from "./pages/Capsule/SelectCapsule";
import WriteCapsule from "./pages/Capsule/WriteCapsule";

function App() {
	return (
		<div className="App">
			<div className="App-container">
				<Header />
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<SelectCapsule />} />
						<Route path="/capsule" element={<SelectCapsule />} />
						<Route path="/capsule/:id" element={<WriteCapsule />} />
					</Routes>
				</BrowserRouter>
				<Footer />
			</div>
		</div>
	);
}

export default App;
