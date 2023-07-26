import {createStyles} from '@mantine/core';

const useStyles = createStyles((theme) => ({
    value: {
        fontSize: theme.fontSizes.sm,
        height: 'auto',
        paddingInline: theme.spacing.sm,
    },
    defaultValueLabel: {
        whiteSpace: 'break-spaces',
    },

    // Carousel
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
    carouselTextRoot: {
        maxHeight: '300px',
        overflow: 'auto',
    },
}));

export default useStyles;
