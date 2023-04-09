import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import BookMarked from "../BookMarked/BookMarked";
import TimeSpent from "../TimeSpent/TimeSpent";

const Main = () => {
  const [timeSpent, setTimeSpent] = useState(0);
  const [blogTitles, setBlogTitles] = useState([]);
  const [totalBlog, setTotalBlog] = useState(0);
  const [show, setShow] = useState(false);
  const handleTimeSpent = (readTime) => {
    setTimeSpent(timeSpent + readTime);
  };
  const handleBookMarked = (blogTitle) => {
    if (!blogTitles.includes(blogTitle))
      setBlogTitles([...blogTitles, blogTitle]);
    else setShow(true);
    setTotalBlog(blogTitles.length);
  };
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("./closeToOriginalData.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <>
      <div className="container mx-auto row  d-flex justify-content-between ">
        <div className="col-12 col-lg-8 ">
          {blogs.map((blog) => (
            <Blog
              blog={blog}
              handleTimeSpent={handleTimeSpent}
              handleBookMarked={handleBookMarked}
              show={show}
              setShow={setShow}
              key={blog.id}
            ></Blog>
          ))}
        </div>
        <div className="col-12 col-lg-3">
          <div className="position-sticky top-0">
            <TimeSpent timeSpent={timeSpent}></TimeSpent>
            <BookMarked
              blogTitles={blogTitles}
              totalBlog={totalBlog}
              show={show}
              setShow={setShow}
            ></BookMarked>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
