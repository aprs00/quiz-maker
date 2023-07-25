import {rest} from 'msw';
import {faker} from '@faker-js/faker';

import {db, persistDb} from '../db';
import {delayedResponse} from '../utils';
import {API_URL} from '@/config/env';

export const quizzesHandlers = [
    rest.get(`${API_URL}/quizzes`, (_, __, ctx) => {
        try {
            const result = db.quiz.findMany({});
            return delayedResponse(ctx.json(result));
        } catch (error: any) {
            return delayedResponse(ctx.status(400), ctx.json({message: error?.message || 'Server Error'}));
        }
    }),

    rest.get(`${API_URL}/quizzes/:quizId`, (req, res, ctx) => {
        try {
            const {quizId} = req.params;
            const result = db.quiz.findFirst({
                where: {
                    id: {
                        equals: Number(quizId),
                    },
                },
            });
            return delayedResponse(ctx.json(result));
        } catch (error: any) {
            return delayedResponse(ctx.status(400), ctx.json({message: error?.message || 'Server Error'}));
        }
    }),

    rest.post(`${API_URL}/quizzes`, (req, _, ctx) => {
        try {
            const data = req.json();
            const result = db.quiz.create({
                id: faker.number.int(),
                ...data,
            });
            persistDb('quiz');
            return delayedResponse(ctx.json(result));
        } catch (error: any) {
            return delayedResponse(ctx.status(400), ctx.json({message: error?.message || 'Server Error'}));
        }
    }),

    rest.put(`${API_URL}/quizzes/:quizId`, async (req, _, ctx) => {
        try {
            const {quizId} = req.params;
            const data = await req.json();
            console.log('data', data);
            const result = db.quiz.update({
                where: {
                    id: {
                        equals: Number(quizId),
                    },
                },
                data,
            });
            console.log('result', result);
            // persistDb('quiz');
            console.log(data);
            return delayedResponse(ctx.json(result));
        } catch (error: any) {
            console.log(error);
            return delayedResponse(ctx.status(400), ctx.json({message: error?.message || 'Server Error'}));
        }
    }),

    rest.delete(`${API_URL}/quizzes/:quizId`, async (req, _, ctx) => {
        try {
            const {quizId} = req.params;
            const result = db.quiz.delete({
                where: {
                    id: {
                        equals: Number(quizId),
                    },
                },
            });
            persistDb('quiz');
            return delayedResponse(ctx.json(result));
        } catch (error: any) {
            console.log(error);
            return delayedResponse(ctx.status(400), ctx.json({message: error?.message || 'Server Error'}));
        }
    }),
];
