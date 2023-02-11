import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: '#ABB2BF' }} />}
        {...props}
        sx={{
            backgroundColor: "#1E1D22",
        }}
    />
))(({ theme }) => ({
    backgroundColor: 'none',
    flexDirection: 'row',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    backgroundColor: '#1E1D22',
    padding: theme.spacing(2),
    borderTop: 'none',
    fontSize:'12em'
}));

export default function CustomizedAccordions({ accordionContent, accordionTitle, id }) {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (

        <div div className='border border-x-0 border-t-primary-100 border-b-primary-100 border-opacity-25 cursor-pointer' >
            {
                id < 2 ?
                    <Accordion Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <Typography className='text-[1.2em] lg:text-[2em] sm:text-[0.95em] text-gray py-10 p'>{accordionTitle}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className='text-[1.2em] lg:text-[2em] sm:text-[0.95em] text-gray pb-10 w-[50%] p'>
                                {accordionContent}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    :
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                            <Typography className='text-[1.2em] lg:text-[2em] sm:text-[0.95em] text-gray py-10 p'>{accordionTitle}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className='text-[1.2em] lg:text-[2em] sm:text-[0.95em] text-gray pb-10 w-[50%] p'>
                                {accordionContent}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

            }
        </div >
    );
}