import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import MovieListing from "../pages/MovieListing";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "movies",
                element: <MovieListing />,
            },
        ],
    },
]);