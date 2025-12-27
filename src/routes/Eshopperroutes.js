import {
    createBrowserRouter,
  
  } from "react-router-dom";
import App from "../components/App";
import Home from "../components/Home";
import Login from "../components/Login";
import Cart from "../components/Cart";
import Addcategory from "../components/Addcategory";
import Addproduct from "../components/Addproduct";
import Addbrand from "../components/Addbrands";
import Password from "../components/Password";
import Singleproduct from "../components/Singleproduct";
import Checkout from "../components/Checkout";
import Class1 from "../components/Class1";
import Class2 from "../components/Class2";
import Class3 from "../components/Class3";
import Class4 from "../components/Class4";
import Class5 from "../components/Class5";
import Class6 from "../components/Class6";
import Class7 from "../components/Class7";
import Showuser from "../components/Showuser";
import Adduser from "../components/Adduser";
import Memo from "../components/Memo";
import Pure from "../components/Pure";
import Comp1 from "../components/Comp1";
import Comp2 from "../components/Comp2";
import Comp3 from "../components/Comp3";
import Comp4 from "../components/Comp4";
import Receipt from "../components/Receipt";


  const Eshopperroutes = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children:[
        {
            path:"",
            element:<Home />
        },
        {
            path:"login",
            element:<Login />
        },
        {
            path:"cart",
            element:<Cart />
        },
        {
          path:"add-category",
          element:<Addcategory />
      },
      {
        path:"add-brand",
        element:<Addbrand />
    },
      {
        path:"add-product",
        element:<Addproduct />
    },
    {
      path:"password",
      element:<Password />
  },
  {
    path:"singleProduct/:proid",
    element:<Singleproduct />
  },
  {
    path:"checkout-page",
    element:<Checkout />
  },
  {
    path:"class1",
    element:<Class1 />
  },
  {
    path:"class2",
    element:<Class2 name="ajay" age="20" place="mumbai" />
  },
  {
    path:"class3",
    element:<Class3 />
  },
  {
    path:"class4",
    element:<Class4 />
  },
  {
    path:"class5",
    element:<Class5 />
  },
  {
    path:"class6",
    element:<Class6 />
  },
  {
    path:"class7",
    element:<Class7 />
  },
  {
    path:"showuser",
    element:<Showuser />
  },
  {
    path:"adduser",
    element:<Adduser />
  },
  {
    path:"memo",
    element:<Memo />
  },
  {
    path:"pure",
    element:<Pure />
  },
  {
    path:"comp1",
    element:<Comp1 />
  },
  {
    path:"comp2",
    element:<Comp2 />
  },
  {
    path:"comp3",
    element:<Comp3 />
  },{
    path:"comp4",
    element:<Comp4 />
  },
  {
    path:"receipt",
    element:<Receipt />
  }
      ]
    },
  ]);


  export default Eshopperroutes;