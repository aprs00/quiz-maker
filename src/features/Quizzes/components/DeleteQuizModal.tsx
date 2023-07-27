import {memo} from 'react';
import {Modal, Group, Button, Text} from '@mantine/core';

// Types
import type {DeleteQuizModalPropsType} from '../types';
// Api
import {useDeleteQuiz} from '../api';

const DeleteQuizModal = (props: DeleteQuizModalPropsType) => {
    const {opened, quizToDeleteId, close} = props;

    const {mutate: deleteQuiz} = useDeleteQuiz(quizToDeleteId || 0);

    return (
        <Modal
            opened={opened}
            onClose={close}
            transitionProps={{transition: 'fade', duration: 100, timingFunction: 'linear'}}
        >
            <Text fz="md">Are you sure you want to delete this quiz ?</Text>
            <Group mt="xl" position="center">
                <Button onClick={close}>Cancel</Button>
                <Button
                    color="red"
                    onClick={() => {
                        deleteQuiz();
                        close();
                    }}
                >
                    Delete
                </Button>
            </Group>
        </Modal>
    );
};

export default memo(DeleteQuizModal);
