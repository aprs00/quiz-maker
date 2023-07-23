import {lazy} from 'react';
import type {RouteObject} from 'react-router-dom';

// Components
const Quizzes = lazy(() => import('./views/Quizzes'));
const QuizEdit = lazy(() => import('./views/QuizEdit'));

const QuizzesRoutes = [
    {
        path: '/quizzes',
        element: <Quizzes />,
    },
    {
        path: '/quizzes/:id',
        element: <QuizEdit />,
    },
] as RouteObject[];

export default QuizzesRoutes;
