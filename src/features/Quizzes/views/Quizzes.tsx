import {useState, useCallback} from 'react';
import {Table, Button, Flex} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import {IconPlayerPlay, IconTrash, IconPencil} from '@tabler/icons-react';

// Components
import DeleteQuizModal from '../components/DeleteQuizModal';
import QuizzesSkeletonLoader from '../components/QuizzesSkeletonLoader';
// Api
import {useQuizzes} from '../api';

const Quizzes = () => {
    const [quizToDeleteId, setQuizToDeleteId] = useState<any>();
    const [opened, {open, close}] = useDisclosure(false);

    const {data: quizzes, isLoading, error, refetch} = useQuizzes();

    const handleQuizDelete = useCallback(
        (id: number) => {
            open();
            setQuizToDeleteId(id);
        },
        [open, quizToDeleteId],
    );

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
                    <Button color="green" onClick={() => console.log('edit')} leftIcon={<IconPlayerPlay size="1rem" />}>
                        Play
                    </Button>
                    <Button onClick={() => console.log('edit')} leftIcon={<IconPencil size="1rem" />}>
                        Edit
                    </Button>
                    <Button color="red" onClick={() => handleQuizDelete(row.id)} leftIcon={<IconTrash size="1rem" />}>
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
            <Button
                onClick={() => {
                    refetch();
                }}
            >
                fetch
            </Button>
            <DeleteQuizModal opened={opened} quizToDeleteId={quizToDeleteId} close={close} />
            <Table>
                <thead>{tHead}</thead>
                <tbody>{tRows}</tbody>
            </Table>
        </>
    );
};

export default Quizzes;
