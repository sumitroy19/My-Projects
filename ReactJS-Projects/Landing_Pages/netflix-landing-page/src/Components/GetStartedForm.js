import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const NetflixTextField = styled(TextField)({
    '& .MuiFilledInput-root': {
        color: 'white',
        fontSize: '16px',
        fontWeight: 400,
        overflow: 'hidden',
        borderRadius: 4,
        backgroundColor: 'rgba(0,0,0,0.5)',
        border: '1px solid grey',
        boxShadow: 'transparent 2px',
        '&.Mui-focused': {
            border: '1px solid white',
            boxShadow: 'white 0 0 0 2px',
            borderColor: 'white',
            backgroundColor: 'rgba(0,0,0,0.5)',
        },
        '&:hover':{
            backgroundColor: 'rgba(0,0,0,0.5)',
        }
    },
    "& .MuiInputLabel-filled": {
        color: "rgba(255,255,255,0.5)",
    },
    '& label.Mui-focused': {
        color: 'rgba(255,255,255,0.5)',
    },
    '& .MuiFilledInput-underline:after': {
        borderBottom: 'none',
    },
});

export default function GetStatedForm(){
    return <div className="form-conatiner">
        <h3 className="form-heading">Ready to watch? Enter your email to create or restart your membership.</h3>
        <div className="form-body">
            <NetflixTextField
                label="Email address"
                id="email-input"
                variant="filled"
                sx = {{width: '400px', height: '56px'}}
            />
            <button className="get-started-button">Get Started{' '}<ChevronRightIcon sx={{fontSize: '35px'}}/></button>
        </div>
    </div>
}