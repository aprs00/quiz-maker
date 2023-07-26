import {BrowserRouter} from 'react-router-dom';
import {MantineProvider} from '@mantine/core';
import {Notifications} from '@mantine/notifications';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {QueryClientProvider} from '@tanstack/react-query';

import {queryClient} from './lib/react-query';
import AppRoutes from './routes';

function App() {
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <ReactQueryDevtools
                    initialIsOpen
                    position="bottom-left"
                    toggleButtonProps={{
                        style: {
                            marginLeft: '5.5rem',
                            transform: `scale(.7)`,
                            transformOrigin: 'bottom left',
                        },
                    }}
                />
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
            </QueryClientProvider>
        </BrowserRouter>
    );
}

export default App;
