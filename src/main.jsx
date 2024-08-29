import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Loader from "./Components/Loader.jsx";

// Lazy load the pages
const Homepage = lazy(() => import("./Views/Pages/Home/Homepage.jsx"));
const Projectpage = lazy(() => import("./Views/Pages/Project/Projectpage.jsx"));
const Contactpage = lazy(() => import("./Views/Pages/Contact/Contactpage.jsx"));
const Aboutpage = lazy(() => import("./Views/Pages/About/Aboutpage.jsx"));

// import Homepage from "./Views/Pages/Home/Homepage.jsx";
// import Projectpage from "./Views/Pages/Project/Projectpage.jsx";
// import Contactpage from "./Views/Pages/Contact/Contactpage.jsx";
// import Aboutpage from "./Views/Pages/About/Aboutpage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <Homepage />
          </Suspense>
        ),
      },
      {
        path: "projects",
        element: (
          <Suspense fallback={<Loader />}>
            <Projectpage />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<Loader />}>
            <Contactpage />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<Loader />}>
            <Aboutpage />
          </Suspense>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
