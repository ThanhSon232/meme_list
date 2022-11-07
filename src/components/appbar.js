import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import {Box, Button} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const pages = ['Explore', 'Hot', 'Newest'];

const classes = {
    logoHorizontallyCenter: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
    }
};

function ResponsiveAppBar() {

    return (
        <AppBar position="static" color="transparent" elevation="0">
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <Box display='flex' flexGrow={1}>
                    </Box>

                    <div style={classes.logoHorizontallyCenter}>

                    <img
                        alt=""
                        height={40}
                        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/13e1c7dc-d426-4664-ad67-790ddee16540/dcl57mc-851d940f-ac8c-44fb-b34d-27eed4d6b453.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzEzZTFjN2RjLWQ0MjYtNDY2NC1hZDY3LTc5MGRkZWUxNjU0MFwvZGNsNTdtYy04NTFkOTQwZi1hYzhjLTQ0ZmItYjM0ZC0yN2VlZDRkNmI0NTMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.jp276Yqm6hIwqQ2qhfhwi-xOxSsV_fHOKbJXxg8FYoM"/>
                    </div>

                    <AccountCircleIcon fontSize={"large"}/>





                </Toolbar>
            </Container>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{justifyContent: "center"}}>

                        {pages.map((page) => (
                            <Button key={page} sx={{color: 'black'}}>{page}</Button>

                        ))}
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;
