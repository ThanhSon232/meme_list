import {
    Button,
    CircularProgress,
    Grid,
    ImageList,
    ImageListItem,
    ImageListItemBar
} from "@mui/material";
import {useEffect, useState} from "react";
import axios from "axios";
import * as React from "react";

function CustomBody() {
    const URL = "https://api.imgflip.com/get_memes";
    const [isLoading, setIsLoading] = useState(false);
    const [meme, setMeme] = useState([]);

    const handleButtonClick = () => {
        setIsLoading(true);
        axios.get(URL).then((response) => {
            setMeme(response.data["data"]["memes"]);
            setIsLoading(false);
        });

    }

    useEffect(handleButtonClick,[]);

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            <Button onClick={handleButtonClick}>
                Load meme
            </Button>

            {isLoading ? <CircularProgress/> :
                <ImageList cols={4}>
                    {meme.map((item) => (
                                <ImageListItem sx={{ maxHeight: '100%', padding: 0 }}>
                                    <img
                                        src={`${item.url}?fit=crop&auto=format`}
                                        srcSet={`${item.url}?fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.name}
                                        loading="lazy"
                                    />
                                    <ImageListItemBar title={item.name}/>
                                </ImageListItem>
                    ))}
                </ImageList>
            }
        </Grid>

    );
}

export default CustomBody