"use client";
import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add'; // Plus icon
import RemoveIcon from '@mui/icons-material/Remove'; // Minus icon

const ServicAccordian: React.FC = () => {
  // State to control the open/close state of the accordion
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ display: 'flex', alignItems: 'center' }} // Center items vertically
        >
          <IconButton
            color="primary"
            sx={{ color: 'purple', marginRight: '8px' }} // Space between icon and text
          >
            {expanded === 'panel1' ? <RemoveIcon /> : <AddIcon />}
          </IconButton>
          <Typography variant="body1" sx={{ flexGrow: 1, textAlign: 'center' }}>
          Accordion 1
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante venenatis dapibus posuere velit aliquet.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{ display: 'flex', alignItems: 'center' }} // Center items vertically
        >
          <IconButton
            color="primary"
            sx={{ color: 'purple', marginRight: '8px' }} // Space between icon and text
          >
            {expanded === 'panel2' ? <RemoveIcon /> : <AddIcon />}
          </IconButton>
          <Typography variant="body1" sx={{ flexGrow: 1, textAlign: 'center' }}>
            Accordion 2
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante venenatis dapibus posuere velit aliquet.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          aria-controls="panel3a-content"
          id="panel3a-header"
          sx={{ display: 'flex', alignItems: 'center' }} // Center items vertically
        >
          <IconButton
            color="primary"
            sx={{ color: 'purple', marginRight: '8px' }} // Space between icon and text
          >
            {expanded === 'panel3' ? <RemoveIcon /> : <AddIcon />}
          </IconButton>
          <Typography variant="body1" sx={{ flexGrow: 1, textAlign: 'center' }}>
            Accordion 3
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante venenatis dapibus posuere velit aliquet.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          aria-controls="panel4a-content"
          id="panel4a-header"
          sx={{ display: 'flex', alignItems: 'center' }} // Center items vertically
        >
          <IconButton
            color="primary"
            sx={{ color: 'purple', marginRight: '8px' }} // Space between icon and text
          >
            {expanded === 'panel4' ? <RemoveIcon /> : <AddIcon />}
          </IconButton>
          <Typography variant="body1" sx={{ flexGrow: 1, textAlign: 'center' }}>
            Accordion 4
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante venenatis dapibus posuere velit aliquet.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          aria-controls="panel5a-content"
          id="panel5a-header"
          sx={{ display: 'flex', alignItems: 'center' }} // Center items vertically
        >
          <IconButton
            color="primary"
            sx={{ color: 'purple', marginRight: '8px' }} // Space between icon and text
          >
            {expanded === 'panel5' ? <RemoveIcon /> : <AddIcon />}
          </IconButton>
          <Typography variant="body1" sx={{ flexGrow: 1, textAlign: 'center' }}>
            Accordion 5
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante venenatis dapibus posuere velit aliquet.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ServicAccordian;
