import {Skeleton} from '@mantine/core';

// Constants
import {SKELETON_TABLE_ROWS} from '../../../config/constants';

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
