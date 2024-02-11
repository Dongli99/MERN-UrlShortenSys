/**
 * Main application component.
 * @module App
 */

import React from "react";
import "./App.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./pages/Home/index";
import { LogIn } from "./pages/LogIn/index";
import { SignUp } from "./pages/SignUp/index";
import { MyURL } from "./pages/MyURL/index";
import { About } from "./pages/About/index";
import { Layout } from "./layout/Layout";
import { ForgotPass } from "./pages/ForgotPass";
import { UserContextProvider } from "./contexts/UserContext";
import { AliasNotFound } from "./pages/AliasNotFound/AliasNotFound";

/**
 * Main application component.
 * @returns {JSX.Element} The JSX element representing the main application component.
 */
function App() {
  /**
   * Create browser router with routes.
   */
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/myurl" element={<MyURL />} />
        <Route path="/about" element={<About />} />
        <Route path="/forgotpass" element={<ForgotPass />} />
        <Route path="/aliasnotfound" element={<AliasNotFound />} />
      </Route>
    )
  );

  /**
   * Render the main application.
   * @returns {JSX.Element} The JSX element representing the main application.
   */
  return (
    <div className="App">
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
    </div>
  );
}

export default App;
