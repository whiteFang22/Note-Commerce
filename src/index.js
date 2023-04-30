import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import {
   createBrowserRouter,
   RouterProvider,
 } from "react-router-dom";
import Search from './pages/Search';
import Upgrade from './pages/Upgrade';
import Abbonamento from './pages/Abbonamento';
import Document from './pages/Document';
import App from './pages/App';
// import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
{
   path: "/",
   element: <Home/>,
},
{
   path: "search",
   element: <Search/>,
},
{
   path: "document",
   element: <Document/>,
},
{
   path: "upgrade",
   element: <Upgrade/>,
},
{
   path: "abbonamento",
   element: <Abbonamento/>,
},
{
   path: "prove",
   element: <App/>,
},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);














// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
