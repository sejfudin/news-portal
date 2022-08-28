import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { setPage } from '../redux/actions/newsActions';

const LoadMoreButton = () => {

    const dispatch = useDispatch();
    const { news, totalResults, page } = useSelector(state => state.news);
    const [isDisabled, setIsDisabled] = useState(false);

    const handleButton = () => {
        dispatch(setPage(page + 1));
    }

    useEffect(() => {
        if (news?.length === totalResults) {
            setIsDisabled(true);
        }
        else {
            setIsDisabled(false);
        }
    }, [news, totalResults])

    return (
        <div>
            <Button
                variant='contained'
                onClick={handleButton}
                disabled={isDisabled}
                style={{ margin: '15px' }}
            >
                Load More

            </Button>
        </div>
    )
}

export default LoadMoreButton;