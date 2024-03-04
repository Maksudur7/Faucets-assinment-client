import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Faq from './Pages/Faq.jsx';
import Notice from './Pages/Notice.jsx';
import { Auth0Provider } from '@auth0/auth0-react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Notice></Notice>
      },
      {
        path: '/faq',
        element: <Faq></Faq>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-aboqfl2fkdchh5my.us.auth0.com"
      clientId="oTt0MIfhVXvFNRTgavki3Quz8wo7a3qj"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>,
)
