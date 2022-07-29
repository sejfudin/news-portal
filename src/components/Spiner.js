import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Spiner = () => {
    return (
        <Box display="flex" justifyContent="center">
            <CircularProgress />
        </Box>
    )
}

export default Spiner;