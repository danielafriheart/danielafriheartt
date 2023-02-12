import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function SimpleSnackbar() {

    const upwork = ''

    useEffect(() => {

        setTimeout(() => {
            handleClick()
        }, 10)

    }, [])

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const action = (
        <React.Fragment>
            <NavLink
                // to={'https://www.upwork.com/freelancers/~01b269e156cff4615c'}
                className='bg-primary bg-opacity-25 text-white p-2 px-5 rounded-md ml-32'
            >
                Upwork
            </NavLink>
        </React.Fragment>
    );

    return (
        <div className='relative z-10' >
            <Snackbar
                open={open}
                autoHideDuration={1000000000}
                onClose={handleClose}
                message="I'm open to exploring freelance opportunities"
                action={action}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                sx={{
                    minWidth: '40vw'
                }}
            />
        </div>
    );
}
