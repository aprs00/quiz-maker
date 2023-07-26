import {BrowserRouter} from 'react-router-dom';
import {MantineProvider} from '@mantine/core';
import {Notifications} from '@mantine/notifications';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {QueryClientProvider} from '@tanstack/react-query';
import {ErrorBoundary} from 'react-error-boundary';

// Components
import Error from './components/Error';

import {queryClient} from './lib/react-query';
import AppRoutes from './routes';

function App() {
    return (
        <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
                colorScheme: 'dark',
            }}
        >
            <ErrorBoundary FallbackComponent={Error}>
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
                        <Notifications position="top-center" />
                        <AppRoutes />
                    </QueryClientProvider>
                </BrowserRouter>
            </ErrorBoundary>
        </MantineProvider>
    );
}

export default App;
