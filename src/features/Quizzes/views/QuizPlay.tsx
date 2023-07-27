import {useState, Fragment} from 'react';
import {Text, Skeleton, Title, Button, Flex, Group} from '@mantine/core';
import {Carousel} from '@mantine/carousel';

// Components
import QuizPlaySkeletonLoader from '../components/QuizPlaySkeletonLoader';
// Api
import {useQuiz} from '../api';
// Types
import {CarouselSlidePropsType} from '../types';
// Hooks
import {useCustomRouter} from '@/hooks';
import useStyles from '../styles';

const CarouselSlide = (props: CarouselSlidePropsType) => {
    const {question} = props;

    const [skeletonVisible, setSkeletonVisible] = useState(true);

    const {classes} = useStyles();

    return (
        <Carousel.Slide key={question.id}>
            <Flex direction="column" gap="xl">
                <Text classNames={{root: classes.carouselTextRoot}}>{question.question}</Text>
                <Skeleton visible={skeletonVisible}>
                    <Text>{question.answer}</Text>
                </Skeleton>
                <Group position="center" mt="sm">
                    <Button compact onClick={() => setSkeletonVisible((prev) => !prev)}>
                        Reveal answer
                    </Button>
                </Group>
            </Flex>
        </Carousel.Slide>
    );
};

const QuizEdit = () => {
    const {goBack, id} = useCustomRouter();

    const {classes} = useStyles();

    const {data: quiz, isLoading: quizFetchLoading} = useQuiz(Number(id));

    const questionSlides = quiz?.questions.map((question) => (
        <Fragment key={question.id}>
            <CarouselSlide question={question} />
        </Fragment>
    ));

    if (quizFetchLoading) {
        return <QuizPlaySkeletonLoader />;
    }
    return (
        <>
            <Title order={3} ta="center">
                {quiz?.name}
            </Title>
            <Carousel
                withIndicators
                height={400}
                classNames={{
                    container: classes.carouselContainer,
                    slide: classes.carouselSlide,
                    control: classes.carouselControl,
                }}
            >
                {questionSlides}
            </Carousel>

            <Group position="right" mt="xl">
                <Button onClick={goBack}>Back</Button>
            </Group>
        </>
    );
};

export default QuizEdit;
