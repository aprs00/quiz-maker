import {BrowserRouter} from 'react-router-dom';
import {MantineProvider} from '@mantine/core';
import {Notifications} from '@mantine/notifications';

import AppRoutes from './routes';

function App() {
    return (
        <BrowserRouter>
            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    colorScheme: 'dark',
                }}
            >
                <Notifications position="top-center" />
                <AppRoutes />
            </MantineProvider>
        </BrowserRouter>
    );
}

export default App;
