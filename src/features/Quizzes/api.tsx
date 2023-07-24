import {useQuery, useMutation} from '@tanstack/react-query';

// LIBS
import {queryClient} from '@/lib/react-query';
import {api} from '@/lib/ky';
// TYPES
import type {QuizzesResponseType, QuizResponseType, QuestionsResponseType} from './types';

import {API_URL} from '@/config/env';

// QUESTIONS
const fetchQuestions = async (): Promise<QuestionsResponseType> => {
    const data = (await api.get('questions').json()) as QuestionsResponseType;
    return data;
};

const useQuestions = () => {
    return useQuery({
        queryKey: ['questions'],
        queryFn: () => fetchQuestions(),
    });
};

// QUIZZES
const fetchQuizzes = async (): Promise<QuizzesResponseType> => {
    const data = (await api.get('quizzes').json()) as QuizzesResponseType;
    return data;
};

const fetchQuiz = async (id: number): Promise<QuizResponseType> => {
    // const data = (await api.get(`quizzes/${id}`).json()) as QuizResponseType;
    // return data;

    // use fetch instead of ky
    const response = await fetch(`${API_URL}/quizzes/${id}`);
    const data = await response.json();
    return data;
};

const updateQuiz = async (id: number, json: any): Promise<void> => {
    await api.put(`quizzes/${id}`, {json});
};

const deleteQuiz = async (id: number): Promise<void> => {
    await api.delete(`quizzes/${id}`);
};

const useQuizzes = (quizEditForm) => {
    return useQuery({
        queryKey: ['quizzes'],
        queryFn: () => fetchQuizzes(),
    });
};

const useQuiz = (id: number) => {
    return useQuery({
        queryKey: ['quiz', id],
        queryFn: () => fetchQuiz(id),
    });
};

const useUpdateQuiz = (id: number) => {
    return useMutation({
        mutationKey: ['updateQuiz', id],
        mutationFn: (json) => updateQuiz(id, json),
        onSuccess: () => {
            console.log('useUpdateQuiz');
            queryClient.invalidateQueries(['quizzes']);
        },
        onError: (error) => {
            console.log('useUpdateQuiz error', error);
        },
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

export {useQuizzes, useQuiz, useUpdateQuiz, useDeleteQuiz, useQuestions};
