import {rest} from 'msw';
import {faker} from '@faker-js/faker';

import {db, persistDb} from '../db';
import {delayedResponse} from '../utils';
import {API_URL} from '@/config/env';
import type {MockPayloadQuestion} from '@/features/Quizzes/types';

export const quizzesHandlers = [
    rest.get(`${API_URL}/quizzes`, (_, __, ctx) => {
        try {
            const result = db.quiz.getAll();
            return delayedResponse(ctx.json(result));
        } catch (error: any) {
            return delayedResponse(ctx.status(400), ctx.json({message: error?.message || 'Server Error'}));
        }
    }),

    rest.get(`${API_URL}/quizzes/:quizId`, (req, __, ctx) => {
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

    rest.post(`${API_URL}/quizzes`, async (req, _, ctx) => {
        try {
            const data = await req.json();

            const questions = data.questions.map((question: MockPayloadQuestion) => {
                if (!question) return;
                if (question.id) {
                    db.question.findFirst({
                        where: {
                            id: {
                                equals: question.id,
                            },
                        },
                    });
                }

                return db.question.create({
                    question: question.question,
                    answer: question.answer,
                    id: faker.number.int(),
                });
            });

            const result = db.quiz.create({
                id: faker.number.int(),
                name: data.name,
                questions: questions,
            });

            persistDb('quiz');
            persistDb('question');

            return delayedResponse(ctx.json(result));
        } catch (error: any) {
            return delayedResponse(ctx.status(400), ctx.json({message: error?.message || 'Server Error'}));
        }
    }),

    rest.put(`${API_URL}/quizzes/:id`, async (req, _, ctx) => {
        try {
            const {id} = req.params;
            const data = await req.json();

            const questions = data.questions.map((question: MockPayloadQuestion) => {
                if (!question) return;
                if (question.id) {
                    db.question.findFirst({
                        where: {
                            id: {
                                equals: question.id,
                            },
                        },
                    });
                }

                return db.question.create({
                    question: question.question,
                    answer: question.answer,
                    id: faker.number.int(),
                });
            });

            const updateData = {
                name: data.name,
                questions: questions,
            };

            const result = db.quiz.update({
                where: {
                    id: {
                        equals: Number(id),
                    },
                },
                data: updateData,
            });

            persistDb('quiz');
            persistDb('question');

            return delayedResponse(ctx.json(result));
        } catch (error: any) {
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
            return delayedResponse(ctx.status(400), ctx.json({message: error?.message || 'Server Error'}));
        }
    }),
];
