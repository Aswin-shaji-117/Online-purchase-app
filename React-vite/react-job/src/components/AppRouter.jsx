import React from 'react'
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import SignUp from './Sighnup/SignUp'
import NotFound from './NotFound'
import LoginForm from './Login.jsx/LoginForm'
import DashBoard from './DashBoard'
import SingleProductDetails from './SingleProductDetails'
import ProtectedRoute from './Login.jsx/ProtectedRoute'

function AppRouter() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/dashboard" element={<ProtectedRoute><DashBoard/></ProtectedRoute>} />
        <Route path="/:product/:id" element={<SingleProductDetails/> } />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}
// const router = createBrowserRouter(
// 
// //   <Routes>
// <Route path="/" element={<Home/>} />
// <Route path="/signup" element={<SignUp/>} />
// <Route path="/login" element={<LoginForm/>} />
// <Route path="/dashboard" element={<ProtectedRoute><DashBoard/></ProtectedRoute>} />
// <Route path="/:product/:id" element={<SingleProductDetails/> } />
// <Route path="*" element={<NotFound/>} />
// </Routes>
//   },
// ]);

// function AppRouter() {
//   return <RouterProvider router={router} />;
// }

export default AppRouter