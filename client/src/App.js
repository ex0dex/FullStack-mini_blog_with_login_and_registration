import NavBar from "./components/NavBar";
import Posts from "./pages/Posts";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles.css/styles.css";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Posts/>} ></Route>
        <Route exact path='/login' element={<LoginPage/>} ></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

