import {
    createBrowserRouter,

  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home";

import PhotoGraph from "../Components/PhotoGraph/PhotoGraph";
import VideoGraphy from "../Components/VideoGraphy/VideoGraphy";
import Login from "../Page/Registration/Login";
import Register from "../Page/Registration/Register";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {

        index:true ,
        element:<Home></Home>,
        },

        {
            path:'/photograph',
            element:<PhotoGraph></PhotoGraph>
        },
        {
          path:'/videograph',
          element:<VideoGraphy></VideoGraphy>
        },
        {
          path:'/login',
          element:<Login></Login>
        }
        ,
        {
          path:'/register',
          element:<Register></Register>
        }
      ]
    },
  ]);