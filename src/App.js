import * as React from 'react';
import ResponsiveAppBar from "./components/appbar";
import CustomBody from "./components/body";
import {Grid} from "@mui/material";

export default function MyApp() {
    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            {ResponsiveAppBar()}
            {CustomBody()}
        </Grid>
    );
}
