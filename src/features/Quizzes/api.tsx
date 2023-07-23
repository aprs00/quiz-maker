import ky from 'ky';
import {useQuery, useMutation} from '@tanstack/react-query';

import {API_URL} from '../../config/env';
import {queryClient} from '../../lib/react-query';

import type {QuizzesResponseType} from './types';

const fetchQuizzes = async (): Promise<QuizzesResponseType> => {
    const data = (await ky.get(`${API_URL}/quizzes`).json()) as QuizzesResponseType;
    return data;
};

const deleteQuiz = async (id: number): Promise<void> => {
    await ky.delete(`${API_URL}/quizzes/${id}`);
};

const useQuizzes = () => {
    return useQuery({
        queryKey: ['quizzes'],
        queryFn: () => fetchQuizzes(),
    });
};

const useDeleteQuiz = (id: number) => {
    return useMutation({
        mutationKey: ['deleteQuiz', id],
        mutationFn: () => deleteQuiz(id),
        onSuccess: () => {
            console.log('useDeleteQuiz');
            queryClient.invalidateQueries(['quizzes']);
        },
        onError: (error) => {
            console.log('useDeleteQuiz error', error);
        },
    });
};

export {useQuizzes, useDeleteQuiz};
