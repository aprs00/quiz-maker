import {memo} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {Header, Container, Group, Burger, Paper, Transition, Button} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';

// Styles
import useStyles from './styles';
// Config
import {NAVIGATION_HEADER_HEIGHT} from '../../config/constants';
import {navigationLinks} from '../../config/pageLinks';

const HeaderResponsive = () => {
    const location = useLocation();
    const [opened, {toggle}] = useDisclosure(false);

    const {classes} = useStyles();

    const currentPath = location.pathname.split('?')[0];

    const items = navigationLinks.map((link) => (
        <Button
            component={Link}
            key={link.label}
            to={link.link}
            variant={currentPath == link.link ? 'light' : 'subtle'}
        >
            {link.label}
        </Button>
    ));

    return (
        <Header height={NAVIGATION_HEADER_HEIGHT}>
            <Container className={classes.header}>
                <Group spacing={5} className={classes.links}>
                    {items}
                </Group>

                <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />

                <Transition transition="pop-top-right" duration={200} mounted={opened}>
                    {(styles) => (
                        <Paper className={classes.dropdown} withBorder style={styles}>
                            {items}
                        </Paper>
                    )}
                </Transition>
            </Container>
        </Header>
    );
};

export default memo(HeaderResponsive);
