import { createRoot } from 'react-dom/client'
import { Suspense, lazy } from 'react'
import Loader from './components/loader/Loader.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
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
let routes = createBrowserRouter([
    {
        path: "/",
        element: <Suspense fallback={<Loader />} >
            <Layout />
        </Suspense>,
        children: [
            {
                index: true,
                element: <Suspense fallback={<Loader />}>
                    <Home />
                </Suspense>
            },
            {
                path: '/',
                children: [
                    {
                        path: 'books',
                        element: <Suspense fallback={<Loader />}><Books /></Suspense>
                    },
                    {
                        path: 'books/details/:id',
                        element: <Suspense fallback={<Loader />}> <BooksDetails /></Suspense>
                    }
                ]
            },
            {
                path: '/about',
                element: <Suspense fallback={<Loader />}><About /></Suspense>
            },


            {
                path: "/login",
                element: <Suspense fallback={<Loader />}>
                    <Login />
                </Suspense>
            },
            {
                path: "login",
                children: [
                    {
                        path: "regis",
                        element: <Suspense fallback={<Loader />}><Regis /></Suspense>
                    }
                ]

            },
            {
                path: "userprofile",
                element: <Suspense fallback={<Loader />}><UserProfile /></Suspense>
            },
            {
                path: '/policy',
                element: <Suspense fallback={<Loader />}><PolicyView /></Suspense>
            },
            {
                path: '/faq',
                element: <Suspense fallback={<Loader />}><Faq /></Suspense>
            },
            {
                path: "contact",
                element: <Suspense fallback={<Loader />}><Contact /></Suspense>
            },
            {
                path: "/p404",
                element: <Suspense fallback={<Loader />}><PageNot /></Suspense>
            }

        ]
    },



])
createRoot(document.getElementById('root')).render(
    <RouterProvider router={routes} />
)
