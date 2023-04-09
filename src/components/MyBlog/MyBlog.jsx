import React from "react";
import QuestionAndAnswer from "./QuestionAndAnswer/QuestionAndAnswer";

const MyBlog = () => {
  return (
    <div className="container my-5 bg-secondary bg-opacity-10 rounded-5 p-5">
      <div className="text-center">
        <h1 className="text-danger">
          Get More Kno<span className="text-warning">wledge!!!</span>
        </h1>
      </div>
      <QuestionAndAnswer
        question={"Props vs state:"}
        answer={`Props are like presents that are given to a person. They cannot change
          the present, but they can use it to play with. In the same way, a
          component in React gets props from its parent component, and it cannot
          change them, but it can use them to do things like show a picture or
          play a sound. 
          State is like a toy that a person can play with and change. Just like
          how a person can make a toy car go fast or slow, a component in React
          can change its state to make things happen, like showing a message or
          hiding something on the screen.
          So, props are like presents that cannot be changed, and state is like
          a toy that can be played with and changed.
          Props are used to pass data from a parent component to a child
          component, while state is used to manage data within a component.
          Props are read-only and cannot be changed by the component itself,
          while state is mutable and can be changed by the component.`}
      ></QuestionAndAnswer>
      <QuestionAndAnswer
        question={`How does useState work?`}
        answer={`Imagine we have a toy car that we can change the color of. The color of the car is like the state. we can use it to keep track of something that can change.

        In the same way, useState is a way for a component in React to keep track of something that can change, like the color of a toy car. When we use useState, we give it an initial value (like the initial color of the car), and it returns the current value of the state (like the current color of the car) and a function that can be used to update the state (like a button that can be used to change the color of the car).
        
        So, useState is like a tool that a component can use to keep track of something that can change, like the color of a toy car, and to update it over time.
        useState hook is used to add state to a functional component. The useState hook is a function that takes an initial value as its argument and returns an array with two elements: the current state value, and a function that can be used to update the state.`}
      ></QuestionAndAnswer>
      <QuestionAndAnswer
        question={`Purpose of useEffect other than fetching data:`}
        answer={`Updating the document title: we can use useEffect to update the document title based on the state of our component. For example, we might want to change the title of the page based on the current user's name, or to show a message when a user leaves the page.

        Adding event listeners: we can use useEffect to add event listeners to elements in wer component. For example, we might want to add a "click" event listener to a button, or a "scroll" event listener to a window.
        
        Managing state outside of a component: we can use useEffect to manage state outside of a component. For example, we might want to use useEffect to keep track of the current time or to set up a timer.
        
        Animations and transitions: we can use useEffect to trigger animations or transitions in our component. For example, we might want to use useEffect to fade in a component when it mounts, or to animate a component when it changes.`}
      ></QuestionAndAnswer>
      <div className="bg-white p-3 rounded-5 my-3 ">
        <h5 className="mb-3">Purpose of useEffect other than fetching data:</h5>
        <p className="ms-3">
          We can use useEffect to update the document title based on the state
          of our component. For example, we might want to change the title of
          the page based on the current user's name, or to show a message when a
          user leaves the page. <br />
          We can use useEffect to add event listeners to elements in wer
          component. For example, we might want to add a "click" event listener
          to a button, or a "scroll" event listener to a window. <br />
          We can use useEffect to manage state outside of a component. For
          example, we might want to use useEffect to keep track of the current
          time or to set up a timer. <br />
          We can use useEffect to trigger animations or transitions in our
          component. For example, we might want to use useEffect to fade in a
          component when it mounts, or to animate a component when it changes.
        </p>
      </div>
      <QuestionAndAnswer
        question={`How Does React work?`}
        answer={`React is a JavaScript library. We use these it to create different parts of the page like buttons, images and forms which is manageable for a developer.

        When someone uses the web page, React looks at what they're doing and updates to show what's happening. React does this by keeping a copy of previous dom called the "virtual DOM".
        
        When React needs to update something, it compares the virtual DOM to the real one and only changes the parts that need to be changed. This helps make web pages run faster and more smoothly, and it makes it easier to create and manage web pages.`}
      ></QuestionAndAnswer>
    </div>
  );
};

export default MyBlog;
