import {useQuery, useMutation} from '@tanstack/react-query';

// Libs
import {queryClient} from '@/lib/react-query';
import {api} from '@/lib/ky';
// Types
import type {QuizzesResponseType, QuizResponseType, QuestionsResponseType, NewQuizType, UpdatedQuizType} from './types';
// Hooks
import {useCustomRouter} from '@/hooks';

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
    const data = (await api.get(`quizzes/${id}`).json()) as QuizResponseType;
    return data;
};

const createQuiz = async (json: any): Promise<void> => {
    await api.post('quizzes', {json});
};

const updateQuiz = async (id: number, json: any): Promise<void> => {
    await api.put(`quizzes/${id}`, {json});
};

const deleteQuiz = async (id: number): Promise<void> => {
    await api.delete(`quizzes/${id}`);
};

const useQuizzes = () => {
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

const useCreateQuiz = () => {
    const {goBack} = useCustomRouter();
    return useMutation({
        mutationKey: ['createQuiz'],
        mutationFn: (json: NewQuizType) => createQuiz(json),
        onSuccess: () => {
            queryClient.invalidateQueries(['quizzes']);
            goBack();
        },
        onError: (error) => {
            console.log('useCreateQuiz error', error);
        },
    });
};

const useUpdateQuiz = (id: number) => {
    const {goBack} = useCustomRouter();
    return useMutation({
        mutationKey: ['updateQuiz', id],
        mutationFn: (json: UpdatedQuizType) => updateQuiz(id, json),
        onSuccess: () => {
            queryClient.invalidateQueries(['quizzes']);
            queryClient.invalidateQueries(['quiz', id]);
            goBack();
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

export {useQuizzes, useQuiz, useCreateQuiz, useUpdateQuiz, useDeleteQuiz, useQuestions};
