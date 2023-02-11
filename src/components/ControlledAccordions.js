import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AiOutlineMinus } from "react-icons/ai"
import { AiOutlinePlus } from "react-icons/ai"

export default function ControlledAccordions({ accordionTitle, accordionContent }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion
                expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
                sx={{
                    backgroundColor: "#1E1D22",
                    color: "#ABB2BF",
                    fontSize: '1.2em'
                }}
                className="border border-x-0 border-t-primary-100 border-b-primary-100 border-opacity-25"
            >

                <AccordionSummary
                    expandIcon={expanded ? <AiOutlineMinus color='gray' /> : <AiOutlinePlus color='gray' />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >

                    <Typography
                        sx={{ width: '100%', flexShrink: 0, fontFamily: 'Quicksand Light' }}
                        className='py-10 '
                    >
                        <span className="text-[1.2em]"> {accordionTitle} </span>
                    </Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <Typography
                        sx={{ fontFamily: 'Quicksand Light' }}
                        className='pb-10 lg:w-[70%]'
                    >
                        <span className="text-[1.2em]"> {accordionContent} </span>
                    </Typography>
                </AccordionDetails>

            </Accordion>
        </div>
    );
}