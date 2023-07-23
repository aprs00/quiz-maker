import {Skeleton} from '@mantine/core';

// Constants
const SKELETON_TABLE_ROWS = 2;

const QuizEditSkeletonLoader = () => {
    return (
        <>
            <Skeleton height={40} width={220} radius="sm" mb="xl" />
            {[...Array(SKELETON_TABLE_ROWS)].map((_, index) => (
                <Skeleton key={index} height={40} radius="sm" mb="sm" />
            ))}
        </>
    );
};

export default QuizEditSkeletonLoader;
