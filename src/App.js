import "./App.css";
import { Navigate, Route, Routes } from "react-router";
import Home from "./Pages/Home";
import AddBlog from "./components/AddBlog";
import BlogDetail from "./components/Blog/BlogDetail";
import Blogs from "./components/Blog/Blogs";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Header from "./components/Header";

function App() {
  const token = localStorage.getItem("token");

  return (
    <>
      <header>{token && <Header token={token} />}</header>
      <main>
        <Routes>
          {token && <Route path="/" exact element={<Home token={token} />} />}
          <Route path="/addblog" element={<AddBlog token={token} />} />
          <Route path="/blogs" element={<Blogs token={token} />} />
          <Route path="/blogs/:id" element={<BlogDetail token={token} />} />

          <Route path="/signup" exact element={<Signup />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/" element={<Navigate replace to="/login" />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
