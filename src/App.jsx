import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./component/layout/RootLayout";
import "./App.css";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { signAction } from "./actions/signinAction";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    id: "root",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <h1>About page</h1>,
      },
      {
        path: "/signin",
        element: <SignIn />,
        action: signAction
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
