import {createStyles, rem} from '@mantine/core';

// Constants
const NAVIGATION_HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
    dropdown: {
        position: 'absolute',
        top: NAVIGATION_HEADER_HEIGHT,
        left: 0,
        right: 0,
        zIndex: 0,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderTopWidth: 0,
        overflow: 'hidden',

        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
    },

    header: {
        height: NAVIGATION_HEADER_HEIGHT,
    },

    links: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    burger: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },
}));

export default useStyles;
