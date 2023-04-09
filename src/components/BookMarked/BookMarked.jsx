import React from "react";
import BookMarkedCard from "../BookMarkedCard/BookMarkedCard";
import ToastCompo from "../Toast/Toast";

const BookMarked = ({ blogTitles, show, setShow }) => {
  return (
    <>
      <ToastCompo show={show} setShow={setShow}></ToastCompo>
      <div className="mt-4 bg-secondary bg-opacity-25 rounded-3 pb-1">
        <h5 style={{ fontSize: "16px" }} className="px-4 pt-3">
          Bookmarked Blogs : {blogTitles.length}
        </h5>
        {blogTitles.map((blogTitle, index) => (
          <BookMarkedCard blogTitle={blogTitle} key={index}></BookMarkedCard>
        ))}
      </div>
    </>
  );
};

export default BookMarked;
