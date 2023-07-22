import {factory, primaryKey, manyOf} from '@mswjs/data';
import {quizGenerator, questionGenerator} from '../data-generator';
import {randomNumber} from '../../utils';

const NUMBER_OF_QUESTIONS = 100;
const NUMBER_OF_QUIZZES = 10;

const models = {
    quiz: {
        id: primaryKey(String),
        name: String,
        questions: manyOf('question'),
    },
    question: {
        id: primaryKey(String),
        question: String,
        answer: String,
    },
};

const db = factory(models);

const loadDb = () => Object.assign(JSON.parse(window.localStorage.getItem('msw-db') || '{}'));

const persistDb = (model: keyof typeof db) => {
    const data = loadDb();
    // @ts-ignore
    data[model] = db[model].getAll();
    window.localStorage.setItem('msw-db', JSON.stringify(data));
};

const populateDb = () => {
    // Generating new question data and adding them to the database
    [...new Array(NUMBER_OF_QUESTIONS)].forEach(() => {
        const questionData = questionGenerator();
        db.question.create(questionData);
    });
    // Generating new quiz data and adding them to the database and randomly assigning questions to them
    [...new Array(NUMBER_OF_QUIZZES)].forEach(() => {
        const quizData = quizGenerator();
        const questions = db.question.getAll();
        const randomQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, randomNumber(15, 25));
        db.quiz.create({...quizData, question: randomQuestions});
    });
};

const initializeDb = () => {
    const database = loadDb();
    Object.entries(db).forEach(([key, model]) => {
        const dataEntries = database[key];
        console.log(dataEntries);
        if (dataEntries) {
            dataEntries?.forEach((entry: Record<string, any>) => model.create(entry));
        } else {
            populateDb();
        }
    });
};

const resetDb = () => {
    window.localStorage.clear();
};

initializeDb();

export {db, loadDb, persistDb, resetDb};
