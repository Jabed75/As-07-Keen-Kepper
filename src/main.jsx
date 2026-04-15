import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css";
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router';
import RootLayout from './layout/RootLayout';
import TimeLine from './pages/TimeLine/TimeLine';
import Stats from './pages/stats/Stats';
import NotFoundPage from './pages/notfoundpage/NotFoundPage';
import HomePage from './pages/homepage/HomePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children:[
      {
        // path:"/",
        index:true,
        element: <HomePage/>,
        loader: ()=> fetch('/friend.json')
      },
      {
        path:"/timeline",
        element: <TimeLine/>
       
      },
      {
        path:"/stats",
        element: <Stats/>
      },
    ],
    errorElement:<NotFoundPage/>
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
     <RouterProvider router={router} />
  </StrictMode>,
)
