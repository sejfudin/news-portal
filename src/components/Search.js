import React, { useState } from 'react';
import AlertMessage from './AlertMessage';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { setPage, setTerm } from '../redux/actions/newsActions';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';

const Search = () => {

    const dispatch = useDispatch();
    const [search, setSearch] = useState('');

    const totalResults = useSelector(state => state.news.totalResults);

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(setTerm(search));
        dispatch(setPage(1))
        setSearch('')
    }

    return (
        <Box
            display="flex"
            justifyContent="end"
            marginTop="15px"
            marginBottom="20px"
        >
            {totalResults === 0 ?
                <AlertMessage />
                :
                <Paper elevation={3} component="form">
                    <InputBase
                        placeholder="Search News" style={{ paddingLeft: 12 }} onChange={e => setSearch(e.target.value)}
                    />
                    <IconButton type="submit" sx={{ p: '10px' }} onClick={handleSearch} >
                        <SearchIcon />
                    </IconButton>
                </Paper>
            }
        </Box>
    )
}

export default Search;