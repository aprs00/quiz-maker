import ky from 'ky';

import {API_URL} from '@/config/env';

const api = ky.create({
    prefixUrl: 'http://quiz-maker.apidocs.enterwell.space/api',
    retry: 0,
    headers: {
        'Content-Type': 'application/json',
    },
});

export {api};
