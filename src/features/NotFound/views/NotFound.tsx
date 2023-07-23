import {Button} from '@mantine/core';

const NotFound = () => {
    return (
        <div>
            <h1>404</h1>
            <p>Page not found</p>
            <Button mt="lg" onClick={() => window.location.assign(window.location.origin)}>
                Refresh
            </Button>
        </div>
    );
};

export default NotFound;
