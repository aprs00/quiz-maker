import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import {USE_MOCK_API} from './config/env.ts';
import {worker} from './mocks/browser.ts';

if (USE_MOCK_API)
    worker.start({
        serviceWorker: {
            url: 'https://quiz-maker-blue.vercel.app/mockServiceWorker.js',
        },
    });

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
