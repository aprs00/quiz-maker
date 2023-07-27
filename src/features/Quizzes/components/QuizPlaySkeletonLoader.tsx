import {Flex, Skeleton, Group} from '@mantine/core';

const QuizPlaySkeletonLoader = () => {
    return (
        <>
            <Flex gap="lg" direction="column" align="center">
                <Skeleton height={40} width={320} radius="sm" mb="xl" />
                <Skeleton height={150} radius="sm" />
                <Skeleton height={90} radius="sm" />
                <Skeleton height={30} width={90} radius="sm" />
            </Flex>

            <Group position="right">
                <Skeleton height={40} width={100} radius="sm" />
            </Group>
        </>
    );
};

export default QuizPlaySkeletonLoader;
