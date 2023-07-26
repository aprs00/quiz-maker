import {Navigate} from 'react-router-dom';
import type {RouteObject} from 'react-router-dom';

// Components
import MainLayout from '@/components/MainLayout';
// Routes
import QuizzesRoutes from '@/features/Quizzes/routes';

export default [
    {
        path: '*',
        element: <Navigate to="/quizzes" />,
    },
    {
        path: '/',
        element: <Navigate to="/quizzes" />,
    },
    {
        path: '',
        element: <MainLayout />,
        children: [...QuizzesRoutes],
    },
] as RouteObject[];
