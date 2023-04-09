import React from "react";

const BookMarkedCard = ({ blogTitle }) => {
  return (
    <div>
      <div className="mx-4 pb-2">
        <h6
          style={{ fontSize: "13px" }}
          className="bg-white px-4 py-2 rounded-3 mb-2"
        >
          {blogTitle}
        </h6>
      </div>
    </div>
  );
};

export default BookMarkedCard;
