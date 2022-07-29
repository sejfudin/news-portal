import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { SORT_ARRAY } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { setPage } from '../redux/actions/newsActions';

const SortDropdown = ({ setSortByValue }) => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    useEffect(() => {
        setSortByValue(value);
        dispatch(setPage(1));
    }, [dispatch, value, setSortByValue])

    return (
        <Box display='flex' justifyContent='end'>
            <FormControl sx={{ width: 255 }}>
                <InputLabel id="demo-simple-select-label" >Sort By Section</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label="Sort By Section"
                    onChange={handleChange}
                >
                    <MenuItem value={SORT_ARRAY[0]}>Popularity</MenuItem><br />
                    <MenuItem value={SORT_ARRAY[1]}>Relevance</MenuItem><br />
                    <MenuItem value={SORT_ARRAY[2]}>Published</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}

export default SortDropdown;