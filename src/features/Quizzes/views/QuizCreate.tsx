import {useState, useMemo, useCallback} from 'react';
import {Title, TextInput, MultiSelect, Flex, Group, Button, Divider} from '@mantine/core';
import {useForm} from '@mantine/form';

// Api
import {useCreateQuiz, useQuestions} from '../api';
// Types
import {QuizCreateFormType, QuestionAddFormType, CreateQuizType} from '../types';
// Hooks
import {useCustomRouter} from '@/hooks';
import useStyles from '../styles';

const QuizCreate = () => {
    const [createdQuestions, setCreatedQuestions] = useState<QuestionAddFormType[]>();

    const {goBack} = useCustomRouter();
    const {classes} = useStyles();

    const {data: questions} = useQuestions();
    const {mutate: createQuiz, isLoading: quizCreateLoading} = useCreateQuiz();

    const quizCreateForm = useForm<QuizCreateFormType>({
        initialValues: {
            name: '',
            questions: [],
        },

        validate: (values) => {
            const errors: Record<string, string> = {};

            if (!values.name) errors.name = 'Name is required';
            if (!values.questions) errors.questions = 'Questions are required';

            return errors;
        },
    });

    const addNewQuestionForm = useForm<QuestionAddFormType>({
        initialValues: {
            answer: '',
            question: '',
            id: null,
            newQuestion: true,
        },

        validate: (values) => {
            const errors: Record<string, string> = {};

            if (!values.answer) errors.answer = 'Answer is required';
            if (!values.question) errors.question = 'Question is required';

            return errors;
        },
    });

    const parsedQuestions = useMemo(
        () => [
            ...(questions ?? []).map((question) => ({
                label: question.question,
                value: question.id.toString(),
            })),
            ...(createdQuestions ?? []).map((question) => ({
                label: question.question,
                value: question.id !== null ? question.id.toString() : '',
            })),
        ],
        [questions, createdQuestions],
    );

    const handleAddQuestion = useCallback(
        (values: QuestionAddFormType) => {
            const {question, answer} = values;
            const newId = crypto.getRandomValues(new Uint32Array(1))[0];
            const newQuestion = {
                question,
                answer,
                id: newId,
                newQuestion: true,
            };

            setCreatedQuestions((prev) => [...(prev || []), newQuestion]);

            addNewQuestionForm.reset();

            quizCreateForm.setFieldValue('questions', [...(quizCreateForm.values.questions || []), newId.toString()]);
        },
        [setCreatedQuestions, addNewQuestionForm],
    );

    const handleCreateQuiz = useCallback(
        (values: QuizCreateFormType) => {
            const concatQuestions = [...(questions ?? []), ...(createdQuestions ?? [])];

            const parsedQuestionsByIds = values.questions?.map((id) => {
                const question = concatQuestions?.find((q) => q.id === Number(id));
                if (!question) return;
                // if a question is a new question, we only need question answer
                if ('newQuestion' in question && question?.newQuestion) {
                    return {
                        question: question.question,
                        answer: question.answer,
                    };
                }
                // if it is an existing question, we also need id
                return question;
            });

            const json: CreateQuizType = {
                name: values.name,
                questions: parsedQuestionsByIds ?? [],
            };

            createQuiz(json);
        },
        [createQuiz, questions, createdQuestions, parsedQuestions],
    );

    return (
        <>
            <form onSubmit={quizCreateForm.onSubmit((values) => handleCreateQuiz(values))}>
                <Flex gap="lg" direction="column" mb="xl">
                    <Title>Create Quiz</Title>
                    <TextInput
                        aria-label="Quiz Name"
                        placeholder="Quiz Name"
                        label="Quiz Name"
                        withAsterisk
                        {...quizCreateForm.getInputProps('name')}
                    />
                    <MultiSelect
                        aria-label="Quiz Questions"
                        data={parsedQuestions}
                        label="Quiz Questions"
                        placeholder="Select Questions"
                        searchable
                        classNames={{value: classes.value}}
                        {...quizCreateForm.getInputProps('questions')}
                    />

                    <Group position="right">
                        <Button variant="outline" onClick={goBack}>
                            Back
                        </Button>
                        <Button type="submit" loading={quizCreateLoading}>
                            Create
                        </Button>
                    </Group>
                </Flex>
            </form>
            <form onSubmit={addNewQuestionForm.onSubmit((values) => handleAddQuestion(values))}>
                <Flex gap="lg" direction="column">
                    <Title order={2}>
                        <Divider my="sm" />
                        Add new question to Quiz Questions:
                    </Title>
                    <TextInput
                        aria-label="Question"
                        placeholder="Question"
                        label="Question"
                        withAsterisk
                        error={addNewQuestionForm.errors}
                        {...addNewQuestionForm.getInputProps('question')}
                    />
                    <TextInput
                        aria-label="Answer"
                        placeholder="Answer"
                        label="Answer"
                        name="answer"
                        withAsterisk
                        error={addNewQuestionForm.errors}
                        {...addNewQuestionForm.getInputProps('answer')}
                    />
                    <Group>
                        <Button type="submit">Add</Button>
                    </Group>
                </Flex>
            </form>
        </>
    );
};

export default QuizCreate;
