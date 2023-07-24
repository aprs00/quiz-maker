import {useState, useEffect, useMemo, useCallback} from 'react';
import {Title, TextInput, MultiSelect, Flex, Group, Button, Divider} from '@mantine/core';
import {useForm} from '@mantine/form';

// Components
import QuizEditSkeletonLoader from '../components/QuizEditSkeletonLoader';
// Api
import {useQuiz, useUpdateQuiz, useQuestions} from '../api';
// Types
import {QuizEditFormType, QuestionAddFormType} from '../types';
// Hooks
import {useCustomRouter} from '@/hooks';
import useStyles from '../styles';

const QuizEdit = () => {
    const [createdQuestions, setCreatedQuestions] = useState<QuestionAddFormType[]>();

    const {goBack, id} = useCustomRouter();
    const {classes} = useStyles();

    const {data: quiz, isLoading, error} = useQuiz(Number(id));
    const {data: questions} = useQuestions();
    const {mutate: updateQuiz} = useUpdateQuiz(Number(id) || 0);

    const quizEditForm = useForm<QuizEditFormType>({
        initialValues: {
            name: '',
            questions: [],
        },
    });

    const addNewQuestionForm = useForm<QuestionAddFormType>({
        initialValues: {
            answer: '',
            question: '',
            id: null,
        },
    });

    const parsedQuestions = useMemo(
        () =>
            [...(questions ?? []), ...(createdQuestions ?? [])].map((question) => ({
                label: question.question,
                value: question.id?.toString(),
            })),
        [questions],
    );

    const handleAddQuestion = useCallback(() => {
        const {question, answer} = addNewQuestionForm.values;
        const newId = crypto.getRandomValues(new Uint32Array(1))[0];
        const newQuestion = {
            question,
            answer,
            id: newId,
        };

        // setCreatedQuestions((prev) => [...(prev || []), newQuestion]);
        // addNewQuestionForm.reset();
        // quizEditForm.setFieldValue('questions', [...(quizEditForm.values.questions || []), newId.toString()]);
        console.log(quizEditForm.values);
    }, [setCreatedQuestions]);

    const handleUpdateQuiz = useCallback(
        (values: QuizEditFormType) => {
            // const parsedQuestionsByIds = values.questions?.map((id) => questions?.find((q) => q.id === Number(id)));
            // if there is no id, add it to the array also
            const parsedQuestionsByIds = values.questions?.map((id) => {
                // if id is -1, it means that it is a new question
                if (id === '-1') return {question: values.name};

                // if (id === '-1') return {question: values.name};

                const question = questions?.find((q) => q.id === Number(id));
                if (!question) return;
                return question;
            });

            const json = {
                name: values.name,
                questions: parsedQuestionsByIds,
            };

            updateQuiz(json);
        },
        [updateQuiz, questions],
    );

    useEffect(() => {
        if (!isLoading && quiz) {
            quizEditForm.setValues({
                name: quiz?.name,
                questions: quiz?.questions.map((question) => question.id.toString()),
            });

            console.log(quizEditForm.values);
        }
    }, [isLoading, quiz]);

    if (isLoading) {
        return <QuizEditSkeletonLoader />;
    }

    return (
        <form onSubmit={quizEditForm.onSubmit((values) => handleUpdateQuiz(values))}>
            <Flex gap="lg" direction="column">
                <Title>{quiz?.name}</Title>
                <TextInput
                    aria-label="Quiz Name"
                    placeholder="Quiz Name"
                    label="Quiz Name"
                    withAsterisk
                    {...quizEditForm.getInputProps('name')}
                />
                <MultiSelect
                    aria-label="Quiz Questions"
                    data={parsedQuestions}
                    label="Quiz Questions"
                    placeholder="Select Questions"
                    searchable
                    classNames={{value: classes.value}}
                    {...quizEditForm.getInputProps('questions')}
                />

                <Title order={2}>
                    <Divider my="sm" />
                    Add new question to select:
                </Title>
                <TextInput
                    aria-label="Question"
                    placeholder="Question"
                    label="Question"
                    withAsterisk
                    {...addNewQuestionForm.getInputProps('question')}
                />
                <TextInput
                    aria-label="Answer"
                    placeholder="Answer"
                    label="Answer"
                    withAsterisk
                    {...addNewQuestionForm.getInputProps('answer')}
                />
                <Group>
                    <Button onClick={handleAddQuestion}>Add</Button>
                </Group>
                <Divider my="sm" />

                <Group position="right">
                    <Button variant="outline" onClick={goBack}>
                        Back
                    </Button>
                    <Button type="submit">Update</Button>
                </Group>
            </Flex>
        </form>
    );
};

export default QuizEdit;
