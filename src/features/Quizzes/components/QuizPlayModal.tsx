import {useState} from 'react';
import {Modal, Text, Skeleton, Title, Button, Flex, Group} from '@mantine/core';
import {Carousel} from '@mantine/carousel';

// Types
import type {CarouselSlidePropsType, QuizPlayModalType} from '../types';
// Styles
import useStyles from '../styles';

const CarouselSlide = (props: CarouselSlidePropsType) => {
    const {question, index} = props;

    const [skeletonVisible, setSkeletonVisible] = useState(true);

    const {classes} = useStyles();

    return (
        <Carousel.Slide key={`${question.id} ${index} ${crypto.randomUUID()}`}>
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

const QuizPlayModal = (props: QuizPlayModalType) => {
    const {opened, quiz, close} = props;

    const {classes} = useStyles();

    const handleOnSlideChange = (index: number) => {
        console.log(index);
    };

    const questionSlides = quiz?.questions.map((question, index) => (
        <CarouselSlide question={question} index={index} />
    ));

    return (
        <>
            <Modal
                opened={opened}
                onClose={close}
                transitionProps={{transition: 'fade', duration: 6100, timingFunction: 'linear'}}
                size="xl"
            >
                <Title order={3} ta="center">
                    {quiz?.name}
                </Title>
                <Carousel
                    withIndicators={false}
                    height={400}
                    classNames={{
                        container: classes.carouselContainer,
                        slide: classes.carouselSlide,
                        control: classes.carouselControl,
                    }}
                    onSlideChange={handleOnSlideChange}
                >
                    {questionSlides}
                </Carousel>
            </Modal>
        </>
    );
};

export default QuizPlayModal;
