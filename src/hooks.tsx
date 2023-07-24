import {useParams, useNavigate} from 'react-router-dom';

const useCustomRouter = () => {
    const navigate = useNavigate();

    const {id} = useParams();

    const goBack = () => navigate(-1);

    return {goBack, id};
};

export {useCustomRouter};
