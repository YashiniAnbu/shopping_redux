import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import "./App.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;