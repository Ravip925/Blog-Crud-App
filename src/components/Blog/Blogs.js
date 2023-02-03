import { useEffect, useState } from "react";
import styled from "styled-components";
import { publicRequest } from "../../requestMethods";
import { mobile } from "../../responsive";
import Footer from "../Footer/Footer";
import Blog from "./Blog";
import "./blog.css";

const Spinner = styled.div`
  border: 10px solid #f3f3f3;
  border-top: 10px solid #3498db;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  animation: spin 1s linear infinite;
  position: absolute;
  top: 40%;
  left: 47%;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  ${mobile({ left: "43%" })}
`;

const fetchHandler = async () => {
  return await publicRequest.get("/blogs").then((res) => res.data);
};

const Blogs = () => {
  const [blogs, setBlogs] = useState("");

  useEffect(() => {
    fetchHandler().then((data) => setBlogs(data.blogs));
  }, []);

  return (
    <>
      {blogs ? (
        <>
          <div className="main">
            <h2 className="blog_page_title">Latest Blogs</h2>
            <ul>
              {blogs &&
                blogs.map((blog, index) => (
                  <li key={index}>
                    <Blog blog={blog} />
                  </li>
                ))}
            </ul>
          </div>
          <br />
          <Footer />
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Blogs;
