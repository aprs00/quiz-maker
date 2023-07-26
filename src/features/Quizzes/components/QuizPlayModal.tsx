import {useState, memo, Fragment} from 'react';
import {Modal, Text, Skeleton, Title, Button, Flex, Group} from '@mantine/core';
import {Carousel} from '@mantine/carousel';

// Types
import type {CarouselSlidePropsType, QuizPlayModalType} from '../types';
// Styles
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

const QuizPlayModal = (props: QuizPlayModalType) => {
    const {opened, quiz, close} = props;

    const {classes} = useStyles();

    const questionSlides = quiz?.questions.map((question) => (
        <Fragment key={question.id}>
            <CarouselSlide question={question} />
        </Fragment>
    ));

    return (
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
        </Modal>
    );
};

export default memo(QuizPlayModal);
