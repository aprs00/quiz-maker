import {factory, primaryKey, manyOf} from '@mswjs/data';
import {quizGenerator, questionGenerator} from './data-generator';
import {randomNumber} from '@/utils';

// Types
import type {QuestionType, QuizType} from '@/features/Quizzes/types';

const NUMBER_OF_QUESTIONS = 70;
const NUMBER_OF_QUIZZES = 10;

const models = {
    quiz: {
        id: primaryKey(Number),
        name: String,
        questions: manyOf('question'),
    },
    question: {
        id: primaryKey(Number),
        question: String,
        answer: String,
    },
};

const db = factory(models);

const localStorageDbName = `quiz-maker-msw-db`;

const loadDb = () => Object.assign(JSON.parse(window.localStorage.getItem(localStorageDbName) || '{}'));

const persistDb = (model: keyof typeof db) => {
    const data = loadDb();

    data[model] = db[model as keyof typeof models].getAll();
    window.localStorage.setItem(localStorageDbName, JSON.stringify(data));
};

const populateDb = () => {
    // Generating new question data and adding them to the database
    const questions: QuestionType[] = [];

    [...new Array(NUMBER_OF_QUESTIONS)].forEach(() => {
        const questionData = questionGenerator();
        const question = db.question.create(questionData);
        questions.push(question);
    });

    // Generating new quiz data and adding them to the database and randomly assigning questions to them
    [...new Array(NUMBER_OF_QUIZZES)].forEach(() => {
        const quizData = quizGenerator();
        const randomQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, randomNumber(15, 25));

        db.quiz.create({...quizData, questions: randomQuestions});
    });
};

const initializeDb = () => {
    const localStorageDb = loadDb();
    const isMockDataEmpty = !Object.keys(localStorageDb).length;

    if (isMockDataEmpty) {
        populateDb();
        persistDb('quiz');
        persistDb('question');
    } else {
        localStorageDb.question.forEach((data: QuestionType) => db.question.create(data));
        const questions = db.question.getAll();

        localStorageDb.quiz.forEach((data: QuizType) => {
            // Retrieve the question IDs from local storage data
            const questionIds = data.questions.map((question) => question.id);
            // Retrieve the actual question objects from the database
            const quizQuestions = questions.filter((question) => questionIds.includes(question.id));
            // Create the quiz with the corresponding questions
            db.quiz.create({...data, questions: quizQuestions});
        });
    }
};

initializeDb();

export {db, persistDb};
