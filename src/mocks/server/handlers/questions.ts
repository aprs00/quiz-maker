import {rest} from 'msw';

import {db} from '../db';
import {delayedResponse} from '../utils';
import {API_URL} from '../../../config/env';

export const questionsHandlers = [
    rest.get(`${API_URL}/questions`, (_, __, ctx) => {
        try {
            const result = db.question.findMany({});
            return delayedResponse(ctx.json(result));
        } catch (error: any) {
            return delayedResponse(ctx.status(400), ctx.json({message: error?.message || 'Server Error'}));
        }
    }),
];
