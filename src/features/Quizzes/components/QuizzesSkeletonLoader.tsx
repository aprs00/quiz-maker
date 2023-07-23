import {Skeleton} from '@mantine/core';

// Constants
const SKELETON_TABLE_ROWS = 11;

const QuizzesSkeletonLoader = () => {
    return (
        <>
            {[...Array(SKELETON_TABLE_ROWS)].map((_, index) => (
                <Skeleton key={index} height={40} radius="sm" mb="sm" />
            ))}
        </>
    );
};

export default QuizzesSkeletonLoader;
