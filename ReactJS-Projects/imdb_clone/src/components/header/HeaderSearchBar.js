import React from "react";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";

export default function HeaderSearchBar() {
    const searchBarStyle = {
        backgroundColor: 'rgb(255, 255, 255)',
        height: '32px',
        width: '720px',
        fontSize: '14px',
        borderRadius: '4px',
        padding: '6px 8px',
        margin:  '0 8px',
        '& hover': {
            backgroundColor: 'rgb(0,0,0)',
            color: 'rgb(255, 255, 255)'
        }
    }

    return <>
        <InputBase placeholder="Search IMDb: Please do not search. This is a Dummy Search Bar... Cheers!!!" sx={searchBarStyle}>
        </InputBase>
    </>
}