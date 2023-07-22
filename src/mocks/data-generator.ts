import {faker} from '@faker-js/faker';

// Utils
import {randomNumber} from '../utils';

const quizGenerator = () => ({
    id: faker.string.uuid(),
    name: faker.lorem.sentence(),
    // questions: [...new Array(randomNumber(15, 25))].map(() => questionGenerator()),
});

const questionGenerator = () => ({
    id: faker.string.uuid(),
    question: faker.lorem.words(),
    answer: faker.lorem.words(),
});

export {quizGenerator, questionGenerator};
