import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import HomePage from "../pages/homepage/HomePage";
import TimeLine from "../pages/TimeLine/TimeLine";
import Stats from "../pages/stats/Stats";
import NotFoundPage from "../pages/notfoundpage/NotFoundPage";
import CardDetails from "../pages/carddetails/CardDetails";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: () => fetch('/friend.json') 
      },
      {
        path: "/timeline",
        element: <TimeLine />
      },
      { 
        
        path: '/homepage/:id', 
        element: <CardDetails/>
      },
      {
        path: "/stats",
        element: <Stats />
      },
    ],
    errorElement: <NotFoundPage />
  },
]);
