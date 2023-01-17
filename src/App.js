import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Blog from "./pages/Blogs";
function App() {
  return (
   <div >
    <BrowserRouter>
     <Header/>

     <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/Blogs" element={<Blog/>} />
     </Routes>
     <Footer/>
    </BrowserRouter>
   
   </div>
  );
}

export default App;
