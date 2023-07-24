import {Flex, Divider, Skeleton, Group} from '@mantine/core';

const QuizEditSkeletonLoader = () => {
    return (
        <Flex gap="lg" direction="column">
            <Skeleton height={40} width={320} radius="sm" />
            <Skeleton height={400} radius="sm" />

            <Divider />
            <Skeleton height={40} width={260} radius="sm" />
            <Skeleton height={40} radius="sm" />
            <Skeleton height={40} radius="sm" />
            <Divider />

            <Group position="right">
                <Skeleton height={40} width={100} radius="sm" />
                <Skeleton height={40} width={100} radius="sm" />
            </Group>
        </Flex>
    );
};

export default QuizEditSkeletonLoader;
