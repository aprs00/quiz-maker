import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
// import {initMocks} from './mocks/server';
import {USE_MOCK_API} from './config/env.ts';
import {worker} from './mocks/server/browser.ts';

// initMocks();

if (USE_MOCK_API) worker.start();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
