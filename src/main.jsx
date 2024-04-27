import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import router from './Routes/Routes.jsx';
import FirebaseAuthProvider from './Provider/FirebaseAuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseAuthProvider>
      <RouterProvider router={router} />
    </FirebaseAuthProvider>
  </React.StrictMode>,
)
