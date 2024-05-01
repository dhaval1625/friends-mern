import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Signup from './pages/Signup';
import AuthLayout from './components/layouts/AuthLayout';
import Login from './pages/Login';
import Feed from './pages/Feed';
import NotFound from './pages/NotFound';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/utils';
import MainLayout from './components/layouts/MainLayout';
import Chat from './pages/Chat';
import FriendsList from './pages/FriendsList';
import UserProfile from './pages/UserProfile';

function App() {
   const router = createBrowserRouter([
      {
         path: '/auth',
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
      {
         path: '/',
         errorElement: <NotFound />,
         element: <MainLayout />,
         children: [
            {
               path: '',
               element: <Feed />,
            },
            {
               path: 'chat',
               element: <Chat />,
            },
            {
               path: 'friends',
               element: <FriendsList />,
            },
            {
               path: 'profile',
               element: <UserProfile />,
            },
         ],
      },
   ]);

   return (
      <QueryClientProvider client={queryClient}>
         <RouterProvider router={router} />
      </QueryClientProvider>
   );
}

export default App;
