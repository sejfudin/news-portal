import React, { useEffect, useState } from 'react';
import SingleItem from './SingleItem';
import SortDropdown from './SortDropdown';
import Spiner from './Spiner';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../redux/actions/newsActions';
import { Box, Grid } from '@material-ui/core';

const LandingPage = () => {
    const [sortByValue, setSortByValue] = useState('');
    const dispatch = useDispatch()
    const { news, term, page } = useSelector(state => state.news)

    useEffect(() => {
        dispatch(fetchNews(page, term, sortByValue));
    }, [dispatch, page, term, sortByValue])

    return (
        <>
            {term && <SortDropdown setSortByValue={setSortByValue} />}
            {news.length === 0 ?
                <Spiner />
                :
                <Box
                    display='flex'
                    justifyContent="center">
                    <Grid container spacing={2}>
                        {
                            news?.map((item, index) => (
                                <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                                    <SingleItem data={item} id={index} />
                                </Grid>
                            ))
                        }

                    </Grid>
                </Box>
            }
        </>
    )
}

export default LandingPage;