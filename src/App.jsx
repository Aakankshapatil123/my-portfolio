import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProjectDetails from "./pages/ProjectDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/project/:id",
    element: <ProjectDetails />
  }
]);

function App() {
  return  <RouterProvider router={router} />;
}

export default App;