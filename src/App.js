import { Provider } from "react-redux";
import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import store from "./utils/store";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainSection from "./components/MainSection";
import VideoPage from "./components/VideoPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Header />
        <Body />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <MainSection />,
      },
      {
        path: "Watch",
        element: <VideoPage />,
      },
      {
        path: "results",
        element: <MainSection />,
      },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
};

export default App;
