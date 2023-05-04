import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Blog.css";

const Blog = () => {
  return (
    <div>
      <Header></Header>
      <div className="container mb-5">
        <div className="single-blog">
          <h3>
            Q: Differences between uncontrolled and controlled components?
          </h3>
          <p>
            <span>Uncontrolled Components: </span>
            Uncontrolled components are those that manage their own state
            internally, rather than being managed by React. These components
            typically use the DOM to get and set values, rather than using
            state. Examples of uncontrolled components are input, textarea, and
            select tag. When a user interacts with these components, the
            component updates the DOM directly without notifying React.
          </p>
          <p>
            <span>Controlled Components: </span>
            Controlled components are those components in which the form data is
            managed by React itself. They are bound to a state and have onChange
            handlers. When the state of a controlled component changes, the
            component re-renders.
          </p>
          <p>
            The key difference between uncontrolled and controlled components is
            that uncontrolled components do not rely on state changes or
            handlers, whereas controlled components do rely on state changes and
            handlers to update their behavior.
          </p>
        </div>
        <div className="single-blog">
          <h3>Q: How to validate React props using PropTypes</h3>
          <p>
            PropTypes is a built-in library in React that enables developers to
            validate the type of props passed to a component. PropTypes can help
            catch errors early in the development process and make debugging
            easier.
          </p>
          <p>
            Here's how to use PropTypes to validate props in React: 1. Import
            PropTypes library: 2. Define the propTypes for component:
          </p>
        </div>
        <div className="single-blog">
          <h3>Q: Difference between nodejs and express js.</h3>
          <p>
            Node.js and Express.js are two popular technologies in the world of
            web development. They serve different purposes and have different
            functionalities.
          </p>
          <p>
            <span>Node.js: </span>
            Node.js is a runtime environment for executing JavaScript code
            outside the browser. It's built on the V8 JavaScript engine and
            allows developers to write server-side code in JavaScript. Node.js
            provides a set of APIs for performing input/output operations,
            networking, and file system operations. It also has a rich ecosystem
            of third-party libraries and packages, making it easy to add
            functionality to Node.js applications.
          </p>
          <p>
            <span>Express.js: </span>Express.js is a web application framework
            built on top of Node.js. It provides a set of features and tools for
            building web applications and APIs quickly and easily. Express.js
            simplifies the process of handling HTTP requests, routing, and
            middleware integration. It also provides templating engines,
            database integration, and session management.
          </p>
        </div>
        <div className="single-blog">
          <h3>
            Q: What is a custom hook and why will we create a custom hook?
          </h3>
          <p>
            Custom hooks are JavaScript functions that begin with "use" and
            follow hook rules. The use of custom hooks allows developers to
            reuse stateful logic across different components in a more modular
            and organized manner.
          </p>
          <p>
            Custom hooks can be used to abstract away complex state management
            or side effects, encapsulate business logic, or provide simple
            abstractions for API requests. To create a custom hook, we can
            define a function that uses one or more built-in hooks, such as
            useState, useEffect, useContext, or useMemo. We can also compose
            multiple custom hooks together to create more complex hooks.
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Blog;
