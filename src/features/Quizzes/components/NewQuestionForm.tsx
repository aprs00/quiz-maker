import {memo} from 'react';
import {Flex, Title, TextInput, Group, Button, Divider} from '@mantine/core';

// Types
import {NewQuestionFormPropsType} from '../types';

const NewQuestionForm = (props: NewQuestionFormPropsType) => {
    const {form, handleAddQuestion} = props;

    return (
        <form onSubmit={form.onSubmit((values) => handleAddQuestion(values))}>
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
                    error={form.errors}
                    {...form.getInputProps('question')}
                />
                <TextInput
                    aria-label="Answer"
                    placeholder="Answer"
                    label="Answer"
                    name="answer"
                    withAsterisk
                    error={form.errors}
                    {...form.getInputProps('answer')}
                />
                <Group>
                    <Button type="submit">Add</Button>
                </Group>
            </Flex>
        </form>
    );
};

export default memo(NewQuestionForm);
