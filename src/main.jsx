import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";import './index.css'
import Root from './Routes/Root';
import Home from './components/Home/Home';
import DonationDetails from './components/Home/DonationDetails/DonationDetails';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Statistics from './components/Statistics';
import Donation from './components/Donation';




const router = createBrowserRouter([
  {
    path: "/",
    element:<Root />,
    errorElement: <ErrorPage />,
    children:[{
      path: '/',
      element: <Home />,
    },
    {
      path: '/donationDetails/:id',
      element: <DonationDetails />,
      loader:()=>fetch('../donation.json')
    },
    {
      path: '/donation',
      element: <Donation />,
      loader:()=>fetch('../donation.json')
    },
    {
      path: '/statistics',
      element: <Statistics />,
    }
  ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
