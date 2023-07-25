import {quizzesHandlers} from './quizzes';
import {questionsHandlers} from './questions';

const handlers = [...quizzesHandlers, ...questionsHandlers];

export {handlers};
