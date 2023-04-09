import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";

const ToastCompo = ({ show, setShow }) => {
  return (
    <div className="mt-2">
      <Row>
        <Col xs={12}>
          <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={3000}
            autohide
          >
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">
                <span className="text-warning">Warning</span>
              </strong>
            </Toast.Header>
            <Toast.Body>You Have Already Bookmarked This Blog!</Toast.Body>
          </Toast>
        </Col>
      </Row>
    </div>
  );
};

export default ToastCompo;
