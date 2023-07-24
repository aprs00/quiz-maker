import {memo} from 'react';
import {Outlet} from 'react-router-dom';
import {AppShell, Container} from '@mantine/core';

import Header from '../Header';

const MainLayout = () => {
    return (
        <AppShell padding={0} navbarOffsetBreakpoint="sm" asideOffsetBreakpoint="sm" header={<Header />}>
            <Container mt={42}>
                <Outlet />
            </Container>
        </AppShell>
    );
};

export default memo(MainLayout);
