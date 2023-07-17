import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Create from "./pages/create/Create";
import BlogDetails from "./pages/blogDetails/BlogDetails";
import UpdateBlog from "./pages/updateBlog/UpdateBlog";

const App = () => {
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<Create />} />
        <Route path="/blogDetails/:id" element={<BlogDetails />} />
        <Route path="/updateBlog/:id" element={<UpdateBlog />} />
      </Routes>
  </BrowserRouter>
};

export default App;
