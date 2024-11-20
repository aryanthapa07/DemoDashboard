import Dashboard from "./components/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProgressLine from "./components/Home/ProgressLine";
import HomePage from "./components/Home/HomePage";
import DotNavigation from "./components/Home/DotNavigation";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <ProgressLine />
        <HomePage />
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <ProgressLine />
        <Dashboard />
      </div>
    ),
  },
  {
    path: "/dashboard/supermarket",
    element: (
      <div>
        <ProgressLine />

      </div>
    ),
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
