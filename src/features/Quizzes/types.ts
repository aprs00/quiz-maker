export type DeleteQuizModalPropsType = {
    opened: boolean;
    close: () => void;
    quizToDeleteId: number | null;
};

export type CarouselSlidePropsType = {
    question: QuestionType;
    index: number;
};

export type QuizPlayModalType = {
    opened: boolean;
    close: () => void;
    quiz: QuizType | null;
};

export type QuizType = {
    id: number;
    name: string;
    questions: QuestionType[];
};

export type QuestionType = {
    id: number;
    question: string;
    answer: string;
};

export type QuizzesResponseType = QuizType[] & {};

export type QuizResponseType = QuizType & {};

export type QuestionsResponseType = QuestionType[] & {};

export type QuizEditFormType = {
    name: string;
    questions: string[];
};

export type QuestionAddFormType = {
    answer: string;
    question: string;
    id: number | null;
};
