import {lazy} from 'react';
import type {RouteObject} from 'react-router-dom';

// Components
const Quizzes = lazy(() => import('./views/Quizzes'));

const QuizzesRoutes = [
    {
        path: '/quizzes',
        element: <Quizzes />,
    },
] as RouteObject[];

export default QuizzesRoutes;
