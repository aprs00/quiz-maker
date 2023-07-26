import ky from 'ky';

import {API_URL} from '@/config/env';

const api = ky.create({
    prefixUrl: API_URL,
    retry: 0,
    headers: {
        'Content-Type': 'application/json',
    },
});

export {api};
