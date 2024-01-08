import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectCapsule from "./pages/Capsule/SelectCapsule";
import WriteCapsule from "./pages/Capsule/WriteCapsule";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<SelectCapsule />} />
					<Route path="/capsule" element={<SelectCapsule />} />
					<Route path="/capsule/:id" element={<WriteCapsule />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
