import {useState, useCallback} from 'react';
import {Table, Button, ActionIcon} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import {IconPlayerPlay} from '@tabler/icons-react';

// Components
import DeleteQuizModal from '../components/DeleteQuizModal';

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

    const handleQuizDelete = useCallback(
        (id: number) => {
            open();
            // setQuizToDelete(id);
            const something = elements.find((question) => question.id === id);
            setQuizToDelete(something);
        },
        [open, quizToDelete],
    );

    const tHead = (
        <tr>
            <th></th>
            <th>Name</th>
            <th>Action</th>
        </tr>
    );

    const tRows = elements.map((row) => (
        <tr key={row.id}>
            <td>
                <ActionIcon size="xl">
                    <IconPlayerPlay color="green" />
                </ActionIcon>
            </td>
            <td>{row.name}</td>
            <td>
                <Button mr="md">Edit</Button>
                <Button color="red" onClick={() => handleQuizDelete(row.id)}>
                    Delete
                </Button>
            </td>
        </tr>
    ));

    return (
        <>
            <DeleteQuizModal opened={opened} quizToDelete={quizToDelete} close={close} />
            <Table>
                <thead>{tHead}</thead>
                <tbody>{tRows}</tbody>
            </Table>
        </>
    );
};

export default Quizzes;
