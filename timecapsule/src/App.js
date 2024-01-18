import "./App.css";

import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import useAuth from "./components/Data/useAuth";

import SelectCapsule from "./pages/Capsule/SelectCapsule";
import WriteCapsule from "./pages/Capsule/WriteCapsule";
import Main from "./pages/Main/Main/Main";
import Mypage from "./pages/Main/Mypage/Mypage";
import Nickname from "./pages/Main/Nickname/Nickname";
import Withdraw from "./pages/Main/Withdraw/Withdraw";
import Capsulearchiving from "./pages/Mycapsule/Capsulearchiving/Capsulearchiving";

import Policy from "./pages/Login/Policy/Policy";
import Policy2 from "./pages/Login/Policy/Policy2";

import Error from "./Error";
import Login from "./pages/Login/Login/Login";
import PolicyFile from "./pages/Login/Policy/PolicyFile";
import MakeNickname from "./pages/Login/MakeNickname/MakeNickname";
import Mycapsule2 from "./pages/Mycapsule/Mycapsule/Mycapsule2";
import ComingSoon from "./pages/ComingSoon/ComingSoon";

function App() {
	const commingSoon = false;
	const [isLogin, setIsLogin] = useState(false);
	const { checkLogin } = useAuth();

	useEffect(() => {
		checkLogin({
			loginFailFunc: () => {
				setIsLogin(false);
			},
			loginSuccessFunc: () => {
				setIsLogin(true);
			},
		});
	}, []);

	return (
		<div className="App">
			<div className="App-container">
				<BrowserRouter>
					{commingSoon ? (
						<ComingSoon />
					) : isLogin ? (
						<Routes>
							<Route path="/" element={<Main />} />
							<Route path="/login" element={<Login />} />
							<Route path="/policy" element={<Policy />} />
							<Route path="/policy2" element={<Policy2 />} />
							<Route
								path="/policyfile"
								element={<PolicyFile />}
							/>
							<Route
								path="/makenickname"
								element={<MakeNickname />}
							/>
							<Route
								path="/capsule"
								element={<SelectCapsule />}
							/>
							<Route
								path="/capsule/:capsule_name"
								element={<WriteCapsule />}
							/>
							<Route path="/main" element={<Main />} />
							<Route path="/mypage" element={<Mypage />} />
							<Route path="/nickname" element={<Nickname />} />
							<Route path="/withdraw" element={<Withdraw />} />
							<Route
								path="/capsulearchiving"
								element={<Capsulearchiving />}
							/>
							<Route path="/mycapsule" element={<Mycapsule2 />} />
							<Route path="/*" element={<Error />} />
						</Routes>
					) : (
						// login 정보 없을 때
						<Routes>
							<Route path="/" element={<Login />} />
							<Route path="/login" element={<Login />} />
							<Route path="/main" element={<Login />} />
							<Route path="/*" element={<Error />} />
						</Routes>
					)}
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
