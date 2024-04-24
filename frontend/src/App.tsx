import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Signup from './pages/Signup';
import AuthLayout from './components/layouts/AuthLayout';
import Login from './pages/Login';

function App() {
   const router = createBrowserRouter([
      {
         path: 'auth',
         element: <AuthLayout />,
         children: [
            {
               path: 'signup',
               element: <Signup />,
            },
            {
               path: 'login',
               element: <Login />,
            },
         ],
      },
   ]);

   return <RouterProvider router={router} />;
}

export default App;
