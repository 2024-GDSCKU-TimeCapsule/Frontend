import "./App.css";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SelectCapsule from "./pages/Capsule/SelectCapsule";
import WriteCapsule from "./pages/Capsule/WriteCapsule";
import Main from "./pages/Main/Main/Main";
import Mypage from "./pages/Main/Mypage/Mypage";
import Nickname from "./pages/Main/Nickname/Nickname";
import Withdraw from "./pages/Main/Withdraw/Withdraw";
import Capsulearchiving from "./pages/Mycapsule/Capsulearchiving/Capsulearchiving";
import Mycapsule from "./pages/Mycapsule/Mycapsule/Mycapsule";
import SupabaseProvider from "./SupabaseProvider";
import Policy from "./pages/Login/Policy/Policy";
import Policy2 from "./pages/Login/Policy/Policy2";

import Login from "./pages/Login/Login/Login";
import PolicyFile from "./pages/Login/Policy/PolicyFile";
import MakeNickname from "./pages/Login/MakeNickname/MakeNickname";
import Mycapsule2 from "./pages/Mycapsule/Mycapsule/Mycapsule2";

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <SupabaseProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/policy" element={<Policy />} />
              <Route path="/policy2" element={<Policy2 />} />
              <Route path="/policyfile" element={<PolicyFile />} />
              <Route path="/makenickname" element={<MakeNickname />} />
              <Route path="/" element={<Main />} />
              <Route path="/capsule" element={<SelectCapsule />} />
              <Route path="/capsule/:capsule_name" element={<WriteCapsule />} />
              <Route path="/main" element={<Main />} />
              <Route path="/mypage" element={<Mypage />} />
              <Route path="/nickname" element={<Nickname />} />
              <Route path="/withdraw" element={<Withdraw />} />
              <Route path="/capsulearchiving" element={<Capsulearchiving />} />
              <Route path="/mycapsule" element={<Mycapsule />} />
              <Route path="/mycapsule2" element={<Mycapsule2 />} />
            </Routes>
          </BrowserRouter>
        </SupabaseProvider>
      </div>
    </div>
  );
}

export default App;
