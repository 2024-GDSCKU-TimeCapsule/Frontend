import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectCapsule from "./pages/Capsule/SelectCapsule";
import WriteCapsule from "./pages/Capsule/WriteCapsule";

import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";

function App() {
<<<<<<< HEAD
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
=======
  return (
    <div className="App">
      <div className="App-container">
        <Header />

        <Footer />
      </div>
    </div>
  );
>>>>>>> main
}

export default App;
