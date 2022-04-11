import NavBar from "./components/NavBar";
import Posts from "./pages/Posts";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./styles.css/styles.css";
import { useEffect, useState } from "react";
import axios from "axios";
import CreateArticle from "./pages/CreateArticle";
import { AuthContext } from "./helpers/AuthContext";

function App() {
  const [authState, setAuthState] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/user/auth", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      },[])
      .then((response) => {
        if (response.data.error) {
          setAuthState(false);
        } else {
          setAuthState(true);
        }
      });  
  }, []);
  return (
    <>
      <AuthContext.Provider value={{ authState, setAuthState }}>
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Posts />}></Route>
            <Route exact path="/login" element={<LoginPage />}></Route>
            <Route exact path="/create" element={<CreateArticle />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </>
  );
}

export default App;
