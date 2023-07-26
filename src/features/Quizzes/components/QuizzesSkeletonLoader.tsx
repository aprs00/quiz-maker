import {Skeleton, Group} from '@mantine/core';

// Constants
const SKELETON_TABLE_ROWS = 11;

const QuizzesSkeletonLoader = () => {
    return (
        <>
            <Group position="right" mb="xl">
                <Skeleton height={36} width={85} radius="sm" />
            </Group>
            {[...Array(SKELETON_TABLE_ROWS)].map((_, index) => (
                <Skeleton key={index} height={40} radius="sm" mb="sm" />
            ))}
        </>
    );
};

export default QuizzesSkeletonLoader;
