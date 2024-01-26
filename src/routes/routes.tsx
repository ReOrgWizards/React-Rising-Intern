import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import Home from "../pages/Home/Home";

const routes = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

function AppRouter() {
  return <RouterProvider router={routes} />;
}

export default AppRouter;
