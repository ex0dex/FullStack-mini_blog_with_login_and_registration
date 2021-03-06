import NavBar from "./components/NavBar";
import Posts from "./pages/Posts";
import Post from './pages/Post'
import EditPost from "./pages/EditPost";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFound from "./pages/NotFound";
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
    <div>
      <AuthContext.Provider value={{ authState, setAuthState }}>
        <NavBar />
        
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Posts />}></Route>
            <Route exact path="/login" element={<LoginPage />}></Route>
            <Route exact path="/register" element={<RegisterPage />}></Route>
            <Route exact path="/create" element={<CreateArticle />}></Route>
            <Route exact path="/read/:id" element={<Post/>}></Route>
            <Route exact path="/edit/:id" element={<EditPost/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
            
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
