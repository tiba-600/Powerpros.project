import "@style/reset.css";
import "@style/main.css";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "@functional/App/App.jsx";
import Overons from "@functional/Overons/Overons";
import Instructies from "@functional/Instructies/Instructies";
import Faq from "@functional/Faq/Faq";
import Contact from "@functional/Contact/Contact";
import Offerte from "@functional/Offerte/Offerte";
import Home from "@pages/Home/Home";
import Solliciteren from "@functional/Solliciteren/Solliciteren";
import DienstenDetail from "@functional/DienstenDetail/DienstenDetail";
import Diensten from "@functional/Diensten/Diensten";
import InstructiesDetail from "@functional/InstructiesDetail/InstructiesDetail";
import Test from "@functional/Test";


const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children:[
  {
    path: "/",
    element: <Home/>
  },
  {
    path:"overons",
    element:<Overons/>
  },

  {
    path:"instructies",
    element:<Instructies/>
  },

  {
    path:"instructiesDetail/:instructieKey/:vraagIndex",
    element:<InstructiesDetail/>
  },

  {
    path:"faq",
    element:<Faq/>
  },

  {
    path:"contact",
    element:<Contact/>
  },

  {
    path:"offerte",
    element:<Offerte/>
  },
  {
    path:"solliciteren",
    element:<Solliciteren/>
  },

  { path: "diensten",
    element: <Diensten/>
   },

   {
    path: "diensten/:slug",
    element: <DienstenDetail />
  },

   {
    path:"test",
    element:<Test/>
  },
]
}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)
