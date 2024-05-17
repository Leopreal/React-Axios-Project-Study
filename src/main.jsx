import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

// PÁGINAS
import Home from './routes/Home.jsx'
import New from './routes/New.jsx'
import Post from './routes/Post.jsx'
import Admin from './routes/Admin.jsx'
import EditPost from './routes/EditPost.jsx'

import './index.css'

const route = createBrowserRouter([ // CRIANDO AS ROTAS DE PAGINAS DIFERENTES OU ELEMENTOS QUE PODE DEIXAR EM TODAS
  {
    element: <App />,
    children: [ // AS OUTRAS PÁGINAS
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/new",
          element: <New />,
        },
        {
          path: "/posts/:id",
          element: <Post />
        },
        {
          path: "/admin",
          element: <Admin />
        },
        {
          path: "/posts/edit/:id",
          element: <EditPost />
        }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={route} />
  </React.StrictMode>,
)
