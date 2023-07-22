import {Modal, Group, Button, Text} from '@mantine/core';

import type {DeleteQuizModalPropsType} from '../types';

const DeleteQuizModal = (props: DeleteQuizModalPropsType) => {
    const {opened, quizToDelete, close} = props;

    return (
        <>
            <Modal
                opened={opened}
                onClose={close}
                transitionProps={{transition: 'fade', duration: 6100, timingFunction: 'linear'}}
            >
                <Text fz="md">
                    Are you sure you want to delete:{' '}
                    <Text span fw={700}>
                        {quizToDelete?.name}
                    </Text>
                </Text>
                <Group mt="xl" position="center">
                    <Button onClick={close}>Cancel</Button>
                    <Button color="red">Delete</Button>
                </Group>
            </Modal>
        </>
    );
};

export default DeleteQuizModal;
