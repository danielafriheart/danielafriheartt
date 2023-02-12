import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from 'react';

export default function SimpleSnackbar() {
    useEffect(() => {
        setTimeout(() => {
            handleClick()
        }, 10000)
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
            <Button
                size="medium"
                onClick={handleClose}

                sx={{
                    backgroundColor: '#9D84B8',
                    // padding: '0.5em',
                    color: '#000',
                }}
            >

                Hire
            </Button>
        </React.Fragment>
    );

    return (
        <div className='relative z-50' >

            <Snackbar
                open={open}
                autoHideDuration={10000}
                onClose={handleClose}
                message="Open to collaborations and freelance opportunities"
                action={action}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                sx={{
                   minWidth: '40vw'
                }}
            />
        </div>
    );
}
