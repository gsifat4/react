import {createBrowserRouter} from 'react-router-dom';
import Login from './views/login.jsx';
import Register from './views/register.jsx';
import Home from './views/Home.jsx';
import Dashboard from './views/Dashboard.jsx';
import DefaultLayout from './Components/DefaultLayout.jsx';
import GuestLayout from './Components/GuestLayout.jsx';
import Users from './views/users.jsx';
import UserForm from './views/UserForm.jsx';
import Add_books from './views/add_books.jsx';
import All_books from './views/all_books.jsx';




const router = createBrowserRouter ([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [

            {
                path: '/',
                element: <Dashboard />,
            },
            {
                path: '/add_books',
                element: <Add_books/>,
            },
            {
                path: '/all_books',
                element: <All_books/>,
            },
            {
                path: '/users',
                element: <Users />,
            },
            {
                path: '/users/new',
                element: <UserForm key="userCreate"/>
            },
            {
                path: '/users/:id',
                element: <UserForm key="userUpdate" />
            },




        ]
    },

    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/Home',
                element: <Home />,
            },
            {
                path: '/all_books',
                element: <All_books/>,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            }
        ]
    },
]);

export default router;
