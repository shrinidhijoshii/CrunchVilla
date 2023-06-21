import React from "react";
import { lazy , Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import AboutClass from "./components/AboutClass";
import { Contact } from "./components/Contact";
import { Error } from "./components/Error";
import { RestaurantMenu } from "./components/RestaurantMenu";
import { About } from "./components/About";
import { Shimmer } from "./components/Shimmer";

//lazy loading - when we click on the componenet then only the related components are rendered
//example when I click on instamart from header , then only related components are loaded for the first time.
// after that it will remian on the page as it is single page application
// lazy loading is also called :
// chunking , bundle splitting , code splitting , on demand loading , dynamic import
// in lazy loading defind components will be maintained in the diferent bundles
// import components in lazy loading like this
// initailly upon lazy loading, when page renders react suspends the loading of the lazy loaded component after trying
// for some millisec, to avoid this issue we will use 'Suspene'export from react
// we can use <Suspense> tag as a parent for lazy load component
// we can pass react inbuilt 'fallback' as prop which will show defined component before loading lazy component
const InstaMart = lazy(() => import("./components/InstaMart"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        // converted to function componnent - to study class based compo
        // refer this componenet AboutClass.js
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer/>}>
            <InstaMart />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
