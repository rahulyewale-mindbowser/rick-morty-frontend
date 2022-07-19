import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import "./App.css";
import NavBar from "./components/NavBar";
import RequireAuth from "./components/RequireAuth";

const CardList = React.lazy(() => import("./containers/CardList"));
const FavoriteList = React.lazy(() => import("./containers/FavoriteList"));
const Login = React.lazy(() => import("./components/Login"));
const Register = React.lazy(() => import("./components/Register"));
const Logout = React.lazy(() => import("./components/Logout"));

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/characters"
            element={
              <RequireAuth>
                <Suspense fallback={<CircularProgress />}>
                  <CardList />
                </Suspense>
              </RequireAuth>
            }
          />
          <Route
            path="/favorite"
            element={
              <RequireAuth>
                <Suspense fallback={<CircularProgress />}>
                  <FavoriteList />
                </Suspense>
              </RequireAuth>
            }
          />
          <Route
            path="/"
            element={
              <Suspense fallback={<CircularProgress />}>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="/register"
            element={
              <Suspense fallback={<CircularProgress />}>
                <Register />
              </Suspense>
            }
          />
          <Route
            path="/logout"
            element={
              <RequireAuth>
                <Suspense fallback={<CircularProgress />}>
                  <Logout />
                </Suspense>
              </RequireAuth>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
