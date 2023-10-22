// import { createBrowserRouter } from "react-router-dom";
// import Main from "../layouts/Main";
// import Home from "../pages/Home/Home";
// import ChefRecipes from "../pages/ChefRecipes/ChefRecipes";
// import ErrorPage from "../pages/ErrorPage/ErrorPage";
// import Blog from "../pages/Blog/Blog";
// import Login from "../pages/Login/Login";
// import Register from "../pages/Register/Register";
// import Contact from "../pages/Contact/Contact";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Main></Main>,
//     children: [
//       {
//         path: "/",
//         element: <Home></Home>,
//       },
//     ],
//   },
//   {
//     path: "/blog",
//     element: <Blog></Blog>,
//   },
//   {
//     path: "/contact",
//     element: <Contact></Contact>,
//   },
//   {
//     path: "/chefrecipes",
//     element: <ChefRecipes></ChefRecipes>,
//   },
//   {
//     path: "/chefrecipes/:id",
//     element: <ChefRecipes></ChefRecipes>,
//   },
//   {
//     path: "/login",
//     element: <Login></Login>,
//   },
//   {
//     path: "/register",
//     element: <Register></Register>,
//   },
//   {
//     path: "*",
//     element: <ErrorPage></ErrorPage>,
//   },

//   {
//     path: "/chefrecipes/:id",
//     element: <ChefRecipes></ChefRecipes>,
//     loader: ({ params }) =>
//       fetch(`https://chef-hunter-server-ahbanna.vercel.app/chef/${params.id}`),
//   },
//   {
//     path: "/chefrecipes",
//     element: <ChefRecipes></ChefRecipes>,
//     children: [
//       {
//         path: ":id",
//         element: <ChefRecipes></ChefRecipes>,
//         loader: ({ params }) =>
//           fetch(
//             `https://chef-hunter-server-ahbanna.vercel.app/chef/${params.id}`
//           ),
//       },
//     ],
//   },
// ]);

// export default router;

import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
// import Home from "../pages/Home/Home";
import Home from "../pages/Home/Home/Home";
import ChefRecipes from "../pages/ChefRecipes/ChefRecipes";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About/About";
import Menu from "../pages/Menu/Menu/Menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "about",
        element: <About></About>,
      },
    ],
  },
  {
    path: "/chefrecipes",
    element: <ChefRecipes></ChefRecipes>,
  },
  {
    path: "/chefrecipes/:id",
    element: <ChefRecipes></ChefRecipes>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },

  {
    path: "/chefrecipes/:id",
    element: <ChefRecipes></ChefRecipes>,
    loader: ({ params }) =>
      fetch(`https://chef-hunter-server-ahbanna.vercel.app/chef/${params.id}`),
  },
  {
    path: "/chefrecipes",
    element: <ChefRecipes></ChefRecipes>,
    children: [
      {
        path: ":id",
        element: <ChefRecipes></ChefRecipes>,
        loader: ({ params }) =>
          fetch(
            `https://chef-hunter-server-ahbanna.vercel.app/chef/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
