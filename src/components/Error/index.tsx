import {Button, Flex, Title} from '@mantine/core';

const Error = () => {
    return (
        <Flex direction="column" align="center" h="100vh" justify="center">
            <Title>An error ocurred, please refresh</Title>
            <div>
                <Button mt="lg" onClick={() => window.location.assign(window.location.origin)}>
                    Refresh
                </Button>
            </div>
        </Flex>
    );
};

export default Error;
