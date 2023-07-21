import {Suspense, memo} from 'react';
import {useRoutes} from 'react-router-dom';

// Routes
import publicRoutes from './public';

const AppRoutes = () => {
    const element = useRoutes([...publicRoutes]);

    return <Suspense>{element}</Suspense>;
};

export default memo(AppRoutes);
