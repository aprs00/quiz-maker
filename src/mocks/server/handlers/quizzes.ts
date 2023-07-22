import {rest} from 'msw';

import {db} from '../db';
import {delayedResponse} from '../utils';
import {API_URL} from '../../../config/env';

export const quizzesHandlers = [
    rest.get(`${API_URL}/quizzes`, (req, res, ctx) => {
        console.log(API_URL);
        try {
            const result = db.quiz.findMany({});
            return delayedResponse(ctx.json(result));
        } catch (error: any) {
            return delayedResponse(ctx.status(400), ctx.json({message: error?.message || 'Server Error'}));
        }
    }),
];
