import {useParams, useNavigate, useLocation} from 'react-router-dom';

const useCustomRouter = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const {id} = useParams();

    const goBack = () => navigate(-1);

    const state = location.state;

    return {goBack, id, state};
};

export {useCustomRouter};
