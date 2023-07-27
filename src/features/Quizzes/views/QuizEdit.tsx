import {useState, useEffect, useMemo, useCallback} from 'react';
import {Title, TextInput, MultiSelect, Flex, Group, Button} from '@mantine/core';
import {useForm} from '@mantine/form';

// Components
import QuizEditSkeletonLoader from '../components/QuizEditSkeletonLoader';
import NewQuestionForm from '../components/NewQuestionForm';
// Api
import {useQuiz, useUpdateQuiz, useQuestions} from '../api';
// Types
import {QuizEditFormType, QuestionAddFormType, QuestionType, UpdatedQuizType} from '../types';
// Hooks
import {useCustomRouter} from '@/hooks';
import useStyles from '../styles';

const QuizEdit = () => {
    const [createdQuestions, setCreatedQuestions] = useState<QuestionAddFormType[]>();

    const {goBack, id} = useCustomRouter();
    const {classes} = useStyles();

    // since quiz from list and single quiz get have same values and properties,
    // we can just pass quiz value through state using react router. (1)
    // if that is not suitable, we can still fetch quiz using useQuiz (2)

    // (1)
    // const [isLoading] = useState(false);
    // const {state: quiz} = useCustomRouter();
    // (2)
    // const {data: quiz, isLoading: quizFetchLoading, isSuccess} = useQuiz(Number(id));
    const {data: quiz, isLoading: quizFetchLoading, isSuccess} = useQuiz(Number(id));

    const {data: questions, isLoading: questionsFetchLoading} = useQuestions();
    const {mutate: updateQuiz, isLoading: quizUpdateLoading} = useUpdateQuiz(Number(id) || 0);

    const quizEditForm = useForm<QuizEditFormType>({
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

            if (!values.question) errors.question = 'Question is required';
            if (!values.answer) errors.answer = 'Answer is required';

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

            quizEditForm.setFieldValue('questions', [...(quizEditForm.values.questions || []), newId.toString()]);
        },
        [setCreatedQuestions, addNewQuestionForm],
    );

    const handleUpdateQuiz = useCallback(
        (values: QuizEditFormType) => {
            const concatQuestions = [...(questions ?? []), ...(createdQuestions ?? [])];

            const parsedQuestionsByIds = values.questions?.map((id) => {
                const question = concatQuestions?.find((q) => q.id === Number(id));
                if (!question) return;
                // if a question is a new question, we only need question and answer
                if ('newQuestion' in question && question?.newQuestion) {
                    return {
                        question: question.question,
                        answer: question.answer,
                    };
                }
                // if it is an existing question, we also need id
                return question;
            });

            const json: UpdatedQuizType = {
                name: values.name,
                questions: parsedQuestionsByIds,
            };

            updateQuiz(json);
        },
        [updateQuiz, questions, createdQuestions],
    );

    useEffect(() => {
        if (!isSuccess) return;
        quizEditForm.setValues({
            name: quiz?.name,
            questions: quiz?.questions.map((question: QuestionType) => question.id.toString()),
        });
    }, [quiz]);

    if (quizFetchLoading || questionsFetchLoading) {
        return <QuizEditSkeletonLoader />;
    }

    return (
        <>
            <form onSubmit={quizEditForm.onSubmit((values) => handleUpdateQuiz(values))}>
                <Flex gap="lg" direction="column" mb="xl">
                    <Title>{quiz?.name}</Title>
                    <TextInput
                        aria-label="Quiz Name"
                        placeholder="Quiz Name"
                        label="Quiz Name"
                        withAsterisk
                        required
                        error={quizEditForm.errors}
                        {...quizEditForm.getInputProps('name')}
                    />
                    <MultiSelect
                        aria-label="Quiz Questions"
                        data={parsedQuestions}
                        label="Quiz Questions"
                        placeholder="Select Questions"
                        searchable
                        classNames={{
                            value: classes.value,
                            defaultValueLabel: classes.defaultValueLabel,
                        }}
                        error={quizEditForm.errors}
                        {...quizEditForm.getInputProps('questions')}
                    />

                    <Group position="right">
                        <Button variant="outline" onClick={goBack}>
                            Back
                        </Button>
                        <Button type="submit" loading={quizUpdateLoading}>
                            Update
                        </Button>
                    </Group>
                </Flex>
            </form>

            <NewQuestionForm form={addNewQuestionForm} handleAddQuestion={handleAddQuestion} />
        </>
    );
};

export default QuizEdit;
