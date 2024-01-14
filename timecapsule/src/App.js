import "./App.css";
import SupabaseProvider from "./supabaseProvider";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import Main from "./pages/Main/Main/Main";
import Test from "./pages/Test/Test";
import Mypage from "./pages/Main/Mypage/Mypage";
import Nickname from "./pages/Main/Nickname/Nickname";
import Withdraw from "./pages/Main/Withdraw/Withdraw";
import Login from "./pages/Login/Login/Login";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <SupabaseProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </SupabaseProvider>
    </div>
  );
}

export default App;
