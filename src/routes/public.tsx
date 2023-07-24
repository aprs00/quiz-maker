import type {RouteObject} from 'react-router-dom';

// Components
import MainLayout from '@/components/MainLayout';
// Routes
import QuizzesRoutes from '@/features/Quizzes/routes';

export default [
    {
        path: '',
        element: <MainLayout />,
        children: [...QuizzesRoutes],
    },
] as RouteObject[];
