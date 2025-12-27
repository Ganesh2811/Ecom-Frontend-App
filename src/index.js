import React from 'react';
import ReactDOM from 'react-dom/client';
import Eshopperroutes from './routes/Eshopperroutes';

import { Provider } from 'react-redux'

import eshopperStore from './redux/eshopperStore';



import {
    RouterProvider,
  } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={eshopperStore}>
    <RouterProvider router={Eshopperroutes} />
    </Provider>
);
