import {faker} from '@faker-js/faker';

const quizGenerator = () => ({
    id: faker.number.int(),
    name: faker.lorem.sentence(),
});

const questionGenerator = () => ({
    id: faker.number.int(),
    question: faker.lorem.paragraph({min: 2, max: 5}),
    answer: faker.music.songName(),
});

export {quizGenerator, questionGenerator};
