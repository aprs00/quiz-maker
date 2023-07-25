import {createStyles} from '@mantine/core';

const useStyles = createStyles((theme) => ({
    value: {
        fontSize: theme.fontSizes.sm,
        height: 'auto',
    },

    // CAROUSEL
    carouselViewport: {
        marginRight: `calc(${theme.spacing.xl} * 3)`,
        marginLeft: `calc(${theme.spacing.xl} * 3)`,
    },
    carouselIndications: {
        marginRight: `calc(${theme.spacing.xl} * 3)`,
        marginLeft: `calc(${theme.spacing.xl} * 3)`,
    },
    carouselContainer: {
        alignItems: 'center',
    },
}));

export default useStyles;
