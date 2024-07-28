import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import Explore from "../pages/Explore";
import Search from "../pages/Search";
import Game from "../pages/Game";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Navigate to="login" replace />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "signup",
                element: <Signup />
            },
            {
                path: "home",
                element: <Home />
            },
            {
                path: "search",
                element: <Search />
            },
            {
                path: ":explore",
                element: <Explore />
            },
            {
                path: "game/guid/:id",
                element: <Game />
            },
        ]
    }
])

export default router;