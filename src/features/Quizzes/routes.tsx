import {lazy} from 'react';
import type {RouteObject} from 'react-router-dom';

// Components
const Quizzes = lazy(() => import('./views/Quizzes'));
const QuizEdit = lazy(() => import('./views/QuizEdit'));
const QuizCreate = lazy(() => import('./views/QuizCreate'));
const QuizPlay = lazy(() => import('./views/QuizPlay'));

const QuizzesRoutes = [
    {
        path: '/quizzes',
        element: <Quizzes />,
    },
    {
        path: '/quizzes/:id',
        element: <QuizEdit />,
    },
    {
        path: '/quizzes/create',
        element: <QuizCreate />,
    },
    {
        path: '/quizzes/:id/play',
        element: <QuizPlay />,
    },
] as RouteObject[];

export default QuizzesRoutes;
