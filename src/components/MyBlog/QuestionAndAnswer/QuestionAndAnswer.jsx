import React from "react";

const QuestionAndAnswer = ({ question, answer }) => {
  return (
    <>
      <div className="bg-white p-3 rounded-5 my-3 ">
        <h5 className="mb-3">{question}</h5>
        <p className="ms-3">{answer}</p>
      </div>
    </>
  );
};

export default QuestionAndAnswer;
