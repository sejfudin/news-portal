import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1, paddingTop: 5 }}>
            <AppBar position="static" style={{ borderRadius: 3 }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> News </Typography>
                    <Typography variant='h5' style={{ flexGrow: 1, textAlign: "center" }}> News Portal </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;