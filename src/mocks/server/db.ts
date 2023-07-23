import {factory, primaryKey, manyOf} from '@mswjs/data';
import {quizGenerator, questionGenerator} from '../data-generator';
import {randomNumber} from '../../utils';

import {QuestionType} from '../../features/Quizzes/types';

const NUMBER_OF_QUESTIONS = 100;
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

const loadDb = () => Object.assign(JSON.parse(window.localStorage.getItem('msw-db') || '{}'));

const persistDb = (model: keyof typeof db) => {
    const data = loadDb();
    // @ts-ignore
    data[model] = db[model].getAll();
    window.localStorage.setItem('msw-db', JSON.stringify(data));
};

// const populateDb = () => {
//     // Generating new question data and adding them to the database
//     [...new Array(NUMBER_OF_QUESTIONS)].forEach(() => {
//         const questionData = questionGenerator();
//         db.question.create(questionData);
//     });
//     // Generating new quiz data and adding them to the database and randomly assigning questions to them
//     [...new Array(NUMBER_OF_QUIZZES)].forEach(() => {
//         const quizData = quizGenerator();
//         const questions = db.question.getAll();
//         const randomQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, randomNumber(15, 25));
//         db.quiz.create({...quizData, questions: randomQuestions});
//     });
// };

const populateDb = () => {
    // Generating new question data and adding them to the database
    const questions: QuestionType[] = [];
    [...new Array(NUMBER_OF_QUESTIONS)].forEach(() => {
        const questionData = questionGenerator();
        const question = db.question.create(questionData);
        questions.push(question); // Store the question IDs
    });

    // Generating new quiz data and adding them to the database and randomly assigning questions to them
    [...new Array(NUMBER_OF_QUIZZES)].forEach(() => {
        const quizData = quizGenerator();
        const randomQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, randomNumber(15, 25));
        db.quiz.create({...quizData, questions: randomQuestions});
    });
};

const initializeDb = () => {
    const database = loadDb();

    // if database is empty, populate it, if not, populate it from local storage data
    if (Object.keys(database).length !== Object.keys(db).length) {
        populateDb();
        persistDb('quiz');
        persistDb('question');
    } else {
        Object.keys(db).forEach((model) => {
            if (model === 'question') {
                // Populate the questions with data from local storage
                database[model].forEach((data) => db[model].create(data));
            } else if (model === 'quiz') {
                const questions = db.question.getAll();
                // Populate the quizzes with data from local storage
                database[model].forEach((data) => {
                    // Retrieve the question IDs from local storage data
                    const questionIds = data.questions.map((question) => question.id);
                    // Retrieve the actual question objects from the generated data
                    const quizQuestions = questions.filter((question) => questionIds.includes(question.id));
                    // Create the quiz with the corresponding questions
                    db.quiz.create({...data, questions: quizQuestions});
                });
            }
        });
    }
};

const resetDb = () => {
    window.localStorage.clear();
};

initializeDb();

export {db, loadDb, persistDb, resetDb};
