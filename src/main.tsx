import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import {USE_MOCK_API} from './config/env.ts';
import {worker} from './mocks/browser.ts';

// worker.start();

async function main() {
    if (USE_MOCK_API) {
        if (window.location.pathname === '/quizzes') {
            window.location.pathname = '/quizzes/';
            return;
        }

        await worker.start();
    }

    ReactDOM.createRoot(document.getElementById('root')!).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    );
}

main();
