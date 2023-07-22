import {useState, useCallback, useEffect} from 'react';
import {Table, Button, ActionIcon, Flex} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import {IconPlayerPlay} from '@tabler/icons-react';

// Components
import DeleteQuizModal from '../components/DeleteQuizModal';
// Config
import {API_URL} from '../../../config/env';

const elements = [
    {
        id: 1,
        name: 'Enterwell Quiz',
        questions: [
            {
                id: 1,
                question:
                    "Who was the English mathematician and writer widely considered as the worldq's first computer programmer for her work on Charles Babbage's proposed mechanical general-purpose computer, the Analytical Engine?",
                answer: 'Ada Lovelace',
            },
        ],
    },
];

const Quizzes = () => {
    const [quizToDelete, setQuizToDelete] = useState<any>();
    const [opened, {open, close}] = useDisclosure(false);
    const [quizzes, setQuizzes] = useState<any[]>([]);

    const handleQuizDelete = useCallback(
        (id: number) => {
            open();
            const quizToDelete = quizzes.find((question) => question.id === id);
            setQuizToDelete(quizToDelete);
        },
        [open, quizToDelete],
    );

    const fetchQuizzes = async () => {
        const response = await fetch(`${API_URL}/quizzes`);
        const quizzesJson = await response.json();
        setQuizzes(quizzesJson);
    };

    const tHead = (
        <tr>
            <th></th>
            <th>Name</th>
            <th>Action</th>
        </tr>
    );

    const tRows = quizzes.map((row) => (
        <tr key={row.id}>
            <td width={30}>
                <ActionIcon size="xl">
                    <IconPlayerPlay color="green" />
                </ActionIcon>
            </td>
            <td>{row.name}</td>
            <td width={150}>
                <Flex direction={{base: 'column', sm: 'row'}} gap="xs">
                    <Button onClick={fetchQuizzes}>Edit</Button>
                    <Button color="red" onClick={() => handleQuizDelete(row.id)}>
                        Delete
                    </Button>
                </Flex>
            </td>
        </tr>
    ));

    useEffect(() => {
        async function logMovies() {
            const response = await fetch('/quizzes');
            const movies = await response.json();
            console.log(movies);
            console.log('f0ew');
        }

        logMovies();
    }, []);

    return (
        <>
            <Button onClick={fetchQuizzes}>fetch</Button>
            <DeleteQuizModal opened={opened} quizToDelete={quizToDelete} close={close} />
            <Table>
                <thead>{tHead}</thead>
                <tbody>{tRows}</tbody>
            </Table>
        </>
    );
};

export default Quizzes;
