import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IMDbLogoImage from '../../assets/IMDb_Logo.png';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import HeaderSearchBar from './HeaderSearchBar';
import IMDbProLogoImage from "../../assets/IMDbPro_Logo.png"
import { styled } from '@mui/material/styles';
import Typography  from "@mui/material/Typography";
import { BiSolidBookmarkPlus } from "react-icons/bi";
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';

export default function Header() {
    const toolBarStyle = {
        minHeight: '48px',
        padding: '4px 0',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'safe center',
        '& div': {
            padding: '0 16px',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '4px',
                padding: '4px 16px'
            },
        },
        '& p': {
            fontFamily: 'Roboto, Helvetica, Arial, sans-serif'
        }
    }

    const mainLogoStyle = {
        display: "flex",
        width: '64px',
        height: '32px',
        cursor: 'pointer',
        marginRight: '8px'
    }

    const logoStyle = {
        
        '&:hover': {
            opacity: '0.1',
            borderRadius: '4px',
            
        },
    }

    const IMDbProLogo = styled('img')({
        width: '52px',
        height: '14px',
        cursor: 'pointer',
        padding: '0 16px',
        alignItems: 'center',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '4px',
            padding: '9px 16px',
        }
    });

    const seperatorStyle = {
        height: '30px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        margin: '0 8px'
    }

    const buttonIconStyle = {
        height: '24px',
        width: '24px'
    }

    const buttonNameStyle = {
        fontSize: '14px',
        fontWeight: '600',
        paddingLeft: '4px'
    }

    const noIconButtonStyle = {
        fontSize: '14px',
        fontWeight: '600',
        padding: '0 16px',
        textWrap: 'nowrap',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '4px',
            padding: '5.5px 16px'
        },
    }

    return <nav className="App-header">
        <AppBar position="static" sx={{backgroundColor: 'rgb(18, 18, 18)'}} >
            <Toolbar sx={toolBarStyle} variant='dense' >
                <img style={mainLogoStyle} src={IMDbLogoImage} alt="IMDb logo" />
                <Box>
                    <MenuIcon sx={buttonIconStyle} />
                    <Typography sx={buttonNameStyle}>Menu</Typography>
                </Box>
                <HeaderSearchBar />
                <IMDbProLogo src={IMDbProLogoImage} alt="IMDbPro logo" />
                <span style={seperatorStyle}></span>
                <Box>
                    <BiSolidBookmarkPlus style={buttonIconStyle} />
                    <Typography sx={buttonNameStyle}>Watchlist</Typography>
                </Box>
                <Typography sx={noIconButtonStyle}>Sign In</Typography>
                <Box sx={{paddingRight: '4px !important'}}>
                    <Typography sx={{fontSize: '14px', fontWeight: '600'}}>EN</Typography>
                    <ArrowDropDownRoundedIcon sx={buttonIconStyle} />
                </Box>
            </Toolbar>
        </AppBar>
    </nav>
}