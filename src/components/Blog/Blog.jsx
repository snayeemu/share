import React from "react";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

const Blog = ({ blog, handleTimeSpent, handleBookMarked, show, setShow }) => {
  const { image, authorImage, authorName, publishDate, readTime, blogTitle } =
    blog;
  return (
    <div>
      <Card className="border-start-0 border-end-0 border-bottom-1">
        <Card.Img variant="top" src={image} className="img-fluid" />
        <Card.Body>
          <Card.Text>
            <div>
              <div className="d-flex justify-content-between">
                <div className="d-flex gap-3">
                  <img
                    style={{ width: "60px" }}
                    src={authorImage}
                    className="img-fluid rounded-5"
                    alt=""
                  />
                  <div className="mt-3">
                    <h1 className="fs-6">{authorName}</h1>
                    <p style={{ fontSize: "12px" }} className="fw-lighter">
                      {publishDate}
                    </p>
                  </div>
                </div>
                <p>
                  {readTime} min read
                  <span>
                    <FontAwesomeIcon
                      onClick={() => handleBookMarked(blogTitle)}
                      style={{ cursor: "pointer" }}
                      icon={faBookmark}
                      className="ms-1"
                    />
                  </span>
                </p>
              </div>
              <h4 className="col-12 col-lg-6 my-2">{blogTitle}</h4>
              <p style={{ fontSize: "11px" }} className="fw-lighter">
                <span className="me-2">#beginners</span>{" "}
                <span>#programming</span>
              </p>
              <p
                onClick={() => handleTimeSpent(readTime)}
                style={{ cursor: "pointer", fontSize: "14px" }}
                className="text-primary text-decoration-underline cursor"
              >
                Mark as read
              </p>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
    </div>
  );
};

export default Blog;
