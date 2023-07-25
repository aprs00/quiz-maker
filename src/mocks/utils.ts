import {createResponseComposition, context} from 'msw';

const delayedResponse = createResponseComposition(undefined, [context.delay(1000)]);

export {delayedResponse};
