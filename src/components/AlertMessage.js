import React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Box } from '@material-ui/core';

const AlertMessage = () => {
    return (
        <Box
            display="flex"
            justifyContent="end">
            <Stack sx={{ width: 255 }} spacing={2}>
                <Alert severity="info">Please insert valid title!</Alert>
            </Stack>
        </Box>
    )
}

export default AlertMessage