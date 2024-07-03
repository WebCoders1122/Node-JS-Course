import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import AddProduct from "./components/AddProduct.jsx";
import LoginForm from "./components/LoginForm.jsx";
import NodeContextProvider from "./context/NodeContext";

const Index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path=''
        element={<Layout />}>
        <Route
          path='/'
          element={<App />}
        />
        <Route
          path='/add'
          element={<AddProduct />}
        />
        <Route
          path='/login'
          element={<LoginForm />}
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NodeContextProvider>
      <Index />
    </NodeContextProvider>
  </React.StrictMode>
);
