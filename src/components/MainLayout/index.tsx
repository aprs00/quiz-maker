import {memo} from 'react';
import {Outlet} from 'react-router-dom';
import {AppShell, Container} from '@mantine/core';

import Header from '../Header';

const MainLayout = () => {
    return (
        <AppShell navbarOffsetBreakpoint="sm" asideOffsetBreakpoint="sm" header={<Header />}>
            <Container mt={32}>
                <Outlet />
            </Container>
        </AppShell>
    );
};

export default memo(MainLayout);
