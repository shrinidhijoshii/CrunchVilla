import React, { useState } from "react";
import { lazy, Suspense } from "react";
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
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import store from "./utils/store";

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

// always do lazy loading outside the component , it means add lazy load code with the imports scope
// for example here writing lazy load code inside AppLayout is wrong thing , add lazy load with other imports
// if we add it wont improve the performance or it does not serve the purpose

// <UserContext.provider> we need to use to overide the exixting data in the defined context
// assume below user data comes from api call dynamically later
// wrapping <UserContext.provider> around all componenets makes sure , same data is available for all the wrapped contents
// if any component is not wrapped using <UserContext.provider> , that particular component will consume initially defined demo user data
// non-wrapping gives us the freedom to provide data to the desired component
// <UserContext.provider> has value , it will take key-value pairs we can use to modify data

const AppLayout = () => {
  const [updatedUser, setUpdatedUser] = useState({
    name: "User2",
    email: "demo.user2@gmail.com",
  });

  return (
    <div className="app">
      <Provider store={store}>
        <UserContext.Provider
          value={{
            user: updatedUser,
            setUser: setUpdatedUser,
          }}
        >
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </Provider>
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
          <Suspense fallback={<Shimmer />}>
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
