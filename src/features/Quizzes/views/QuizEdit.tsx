import {useEffect, useMemo} from 'react';
import {useParams} from 'react-router-dom';
import {Title, TextInput, MultiSelect, Flex} from '@mantine/core';
import {useForm} from '@mantine/form';

// Components
import QuizEditSkeletonLoader from '../components/QuizEditSkeletonLoader';
// Api
import {useQuiz, useQuestions} from '../api';

const QuizEdit = () => {
    const {id} = useParams<{id: string}>();
    const {data: quiz, isLoading, error} = useQuiz(Number(id) || 0);
    const {data: questions} = useQuestions();

    const quizEditForm = useForm({
        initialValues: {
            name: '',
            questions: [] as string[],
        },
    });

    const parsedQuestions = useMemo(
        () =>
            questions?.map((question) => ({
                label: question.question,
                value: question.id.toString(),
            })),
        [questions],
    );

    useEffect(() => {
        if (!isLoading && quiz) {
            quizEditForm.setValues({
                name: quiz.name,
                questions: quiz.questions.map((question) => question.id.toString()),
            });
        }
    }, [isLoading, quiz]);

    if (isLoading) {
        return <QuizEditSkeletonLoader />;
    }

    return (
        <form onSubmit={quizEditForm.onSubmit((values) => console.log(values))}>
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
                    data={parsedQuestions || []}
                    label="Quiz Questions"
                    placeholder="Select Questions"
                    searchable
                    {...quizEditForm.getInputProps('questions')}
                />
            </Flex>
        </form>
    );
};

export default QuizEdit;
