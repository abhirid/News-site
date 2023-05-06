import React, { children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import News from './components/News';


import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './components/RootLayout';

const pageSize=20;
const router = createBrowserRouter([
  {path:'/',element:<RootLayout/>,
  children:[
    {path:'/',element:<App/>},
    {path:'/home',element:<News key='general' pageSize={pageSize} country="in" category="general"/>},
    {path:'/about',element: <h1>this is</h1>},
    {path:'/general',element:<News key='general' pageSize={pageSize} country="in" category="general"/>},
    {path:'/entertainment',element:<News key='entainment' pageSize={pageSize} country="in" category="entertainment"/>},
    {path:'/science',element:<News key='science' pageSize={pageSize} country="in" category="science"/>},
    {path:'/sports',element:<News key='sports' pageSize={pageSize} country="in" category="sports"/>},
    {path:'/technology',element:<News key='technology' pageSize={pageSize} country="in" category="technology"/>},
    {path:'/health',element:<News key='health' pageSize={pageSize} country="in" category="health"/>},

  ],}
 
  
  
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>
);


reportWebVitals();
