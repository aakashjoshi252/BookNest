import { createRoot } from 'react-dom/client'
import { Suspense, lazy } from 'react'
import Loader from './components/loader/Loader.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"

// Lazy imports
let Layout = lazy(() => import('./layout/Layout.jsx'))
let Home = lazy(() => import('./pages/Home.jsx'))
let About = lazy(() => import('./pages/About.jsx'))
let Books = lazy(() => import('./pages/books/Books.jsx'))
let BooksDetails = lazy(() => import('./pages/books/details/details.jsx'))
let Login = lazy(() => import("./auth/Login.jsx"))
let Regis = lazy(() => import("./auth/Regis.jsx"))
let UserProfile = lazy(() => import('./components/profile/UserProfile.jsx'))
let PolicyView = lazy(() => import('./pages/Policy.jsx'))
let Faq = lazy(() => import('./pages/Faq.jsx'))
let Contact = lazy(() => import('./pages/Contact.jsx'))
let PageNot = lazy(() => import("./pages/P404.jsx"))
let AddToCart = lazy(() => import("./pages/books/details/AddToCart.jsx"))
let Checkout = lazy(() => import('./pages/books/details/CheckOut.jsx'))

// ProtectedRoute component
function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("user") // Replace with your auth logic
  if (!isLoggedIn) return <Navigate to="/login" replace />
  return children
}

let routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <Layout />
      </Suspense>
    ),
    children: [
      { index: true, element: <Suspense fallback={<Loader />}><Home /></Suspense> },
      {
        path: 'books',
        element: <Suspense fallback={<Loader />}><Books /></Suspense>
      },
      {
        path: 'books/details/:id',
        element: <Suspense fallback="Loding...."><BooksDetails /></Suspense>
      },
      {
        path:"books/details/addtocart/:id",
        element: (
          <ProtectedRoute>
            <Suspense fallback="Loding..."><AddToCart /></Suspense>
          </ProtectedRoute>
        )
      },
      {
        path:"books/details/addtocart/checkout",
        element: (
          <ProtectedRoute>
            <Suspense fallback="Loding..."><Checkout /></Suspense>
          </ProtectedRoute>
        )
      },
      { path: '/about', element: <Suspense fallback="Loding..."><About /></Suspense> },
      { path: "/login", element: <Suspense fallback="Loding..."><Login /></Suspense> },
      {
        path: "login/regis",
        element: <Suspense fallback="Loding..."><Regis /></Suspense>
      },
      {
        path: "userprofile",
        element: (
          <ProtectedRoute>
            <Suspense fallback={<Loader />}><UserProfile /></Suspense>
          </ProtectedRoute>
        )
      },
      { path: '/policy', element: <Suspense fallback={<Loader />}><PolicyView /></Suspense> },
      { path: '/faq', element: <Suspense fallback={<Loader />}><Faq /></Suspense> },
      { path: "contact", element: <Suspense fallback={<Loader />}><Contact /></Suspense> },
      { path: "/p404", element: <Suspense fallback="Loding..."><PageNot /></Suspense> },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes} />
)
