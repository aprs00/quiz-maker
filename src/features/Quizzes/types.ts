export type DeleteQuizModalPropsType = {
    opened: boolean;
    quizToDelete: QuizType;
    close: () => void;
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
