import {useQuery, useMutation} from '@tanstack/react-query';
import {notifications} from '@mantine/notifications';

// Libs
import {queryClient} from '@/lib/react-query';
import {api} from '@/lib/ky';
// Types
import type {
    QuizzesResponseType,
    QuizResponseType,
    QuestionsResponseType,
    CreateQuizType,
    UpdatedQuizType,
    ErrorResponseType,
} from './types';
// Hooks
import {useCustomRouter} from '@/hooks';

// QUESTIONS
const fetchQuestions = async (): Promise<QuestionsResponseType> => {
    // const data = (await api.get('questions').json()) as QuestionsResponseType;
    // return data;

    // fetch using fetch
    const response = await fetch(`/questions`);
    const data = await response.json();
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

const createQuiz = async (json: CreateQuizType): Promise<void> => {
    await api.post('quizzes', {json});
};

const updateQuiz = async (id: number, json: UpdatedQuizType): Promise<void> => {
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
        mutationFn: (json: CreateQuizType) => createQuiz(json),
        onSuccess: () => {
            queryClient.invalidateQueries(['quizzes']);
            goBack();
            notifications.show({
                title: 'Success',
                message: 'Quiz created successfully',
            });
        },
        onError: (error: ErrorResponseType) => {
            notifications.show({
                title: 'Error',
                message: error.message,
                color: 'red',
            });
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
            notifications.show({
                title: 'Success',
                message: 'Quiz updated successfully',
            });
        },
        onError: (error: ErrorResponseType) => {
            notifications.show({
                title: 'Error',
                message: error.message,
                color: 'red',
            });
        },
    });
};

const useDeleteQuiz = (id: number) => {
    return useMutation({
        mutationKey: ['deleteQuiz', id],
        mutationFn: () => deleteQuiz(id),
        onSuccess: () => {
            queryClient.invalidateQueries(['quizzes']);
            notifications.show({
                title: 'Success',
                message: 'Quiz deleted successfully',
            });
        },
        onError: (error: ErrorResponseType) => {
            notifications.show({
                title: 'Error',
                message: error.message,
                color: 'red',
            });
        },
    });
};

export {useQuizzes, useQuiz, useCreateQuiz, useUpdateQuiz, useDeleteQuiz, useQuestions};
