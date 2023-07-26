import {createStyles, rem} from '@mantine/core';

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
    carouselContainer: {
        alignItems: 'center',
    },
    carouselTextRoot: {
        maxHeight: '300px',
        overflow: 'auto',
    },
    carouselSlide: {
        padding: rem(72),
    },
    carouselControl: {
        '&[data-inactive]': {
            opacity: 0,
            cursor: 'default',
        },
    },
}));

export default useStyles;
