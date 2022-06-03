import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useEffect} from "react";

export default function BasicTextFields({onChangeEventHandler}) {
    let first = true;
    useEffect(() => {
        if (first) {
            first = false;
            onChangeEventHandler("");
        }
    }, [first])

    function onChange(value) {
        onChangeEventHandler(value);
    }

    return (
        <Box
            sx={{
                '& > :not(style)': {mt: 2, mb: 1, width: '100%'},
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="outlined-basic" label="Ara" variant="outlined" onChange={(e) => {
                onChange(e.target.value)
            }}/>
        </Box>
    );
}
