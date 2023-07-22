const initMocks = async () => {
    if (import.meta.env.DEV) {
        if (typeof window === 'undefined') {
            const {server} = await import('./server');
            server.listen();
        } else {
            const {worker} = await import('./browser');
            worker.start();
        }
    }
};

export {initMocks};
