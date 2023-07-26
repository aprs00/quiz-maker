import {useState} from 'react';
import {Link} from 'react-router-dom';
import {Table, Button, Flex, Group} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import {IconPlayerPlay, IconTrash, IconPencil} from '@tabler/icons-react';

// Components
import DeleteQuizModal from '../components/DeleteQuizModal';
import QuizPlayModal from '../components/QuizPlayModal';
import QuizzesSkeletonLoader from '../components/QuizzesSkeletonLoader';
// Api
import {useQuizzes} from '../api';
// Types
import type {QuizType} from '../types';

const Quizzes = () => {
    const [quizToDeleteId, setQuizToDeleteId] = useState<number | null>(null);
    const [quizToPlay, setQuizToPlay] = useState<QuizType | null>(null);
    const [deleteQuizModalOpened, {open: deleteQuizModalOpen, close: deleteQuizModalClose}] = useDisclosure(false);
    const [quizPlayModalOpened, {open: quizPlayModalOpen, close: quizPlayModalClose}] = useDisclosure(false);

    const {data: quizzes, isLoading} = useQuizzes();

    const handleQuizDeleteBtn = (id: number) => {
        deleteQuizModalOpen();
        setQuizToDeleteId(id);
    };

    const handleQuizPlayBtn = (quiz: QuizType) => {
        quizPlayModalOpen();
        setQuizToPlay(quiz);
    };

    const tHead = (
        <tr>
            <th>Name</th>
            <th>Action</th>
        </tr>
    );

    const tRows = quizzes?.map((row) => (
        <tr key={row.id}>
            <td>{row.name}</td>
            <td width={150}>
                <Flex direction={{base: 'column', sm: 'row'}} gap="xs">
                    <Button
                        color="green"
                        onClick={() => handleQuizPlayBtn(row)}
                        leftIcon={<IconPlayerPlay size="1rem" />}
                    >
                        Play
                    </Button>
                    <Button
                        component={Link}
                        to={`/quizzes/${row.id}`}
                        state={row}
                        leftIcon={<IconPencil size="1rem" />}
                    >
                        Edit
                    </Button>
                    <Button
                        color="red"
                        onClick={() => handleQuizDeleteBtn(row.id)}
                        leftIcon={<IconTrash size="1rem" />}
                    >
                        Delete
                    </Button>
                </Flex>
            </td>
        </tr>
    ));

    if (isLoading) {
        return <QuizzesSkeletonLoader />;
    }

    return (
        <>
            <QuizPlayModal quiz={quizToPlay} close={quizPlayModalClose} opened={quizPlayModalOpened} />
            <DeleteQuizModal
                opened={deleteQuizModalOpened}
                quizToDeleteId={quizToDeleteId}
                close={deleteQuizModalClose}
            />

            <Group position="right" mb="xl">
                <Button component={Link} to="/quizzes/create">
                    Create
                </Button>
            </Group>
            <Table>
                <thead>{tHead}</thead>
                <tbody>{tRows}</tbody>
            </Table>
        </>
    );
};

export default Quizzes;
