import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import { Box, TextField, FormGroup, FormLabel, InputLabel } from '@mui/material';


// Icon
import FeaturedVideoIcon from '@mui/icons-material/FeaturedVideo';
import CustomFullScreenDialog from '../CustomFullScreenDialog';

// Styling
import "./CustomAccordion.css";


// test data
const courseContents = [
  {
    id: 1,
    title: 'Programming fundamentals',
    lectureCount: 10,
    lectures: [
      {
        id: 1,
        title: 'Introduction',
        timeStamp: '30.00'
      },
      {
        id: 2,
        title: 'What is programming',
        timeStamp: '10.40'
      },
    ]
  },
  {
    id: 2,
    title: 'Getting started with Python',
    lectureCount: 6,
  },
  {
    id: 3,
    title: 'Conditional Structures',
    lectureCount: 13,
  },
  {
    id: 4,
    title: 'Working with files',
    lectureCount: 8,
  }
]

const Input = styled('input')({
  display: 'none',
});

const CustomTextField = styled(TextField)(() => ({
  '& fieldset': {

  },
}));

const UploadButton = () => {
  const [videoFile, setVideoFile] = useState(null);
  const handleChange = (e) => {
    setVideoFile(e.target.files[0]);
  }

  return (
      <label htmlFor="video-file">
        <Input
          size="small"
          accept="video/*"
          id="video-file"
          type="file" 
          onChange={handleChange}
        />
        <FormGroup style={{position: 'relative'}} row>
          <ValidationTextField fullWidth variant="outlined" size="small" placeholder="video" value={videoFile?.name} helperText="Limit file to 50mB!" />
          <Button
          variant="contained"
          disableElevation
          component="span"
          sx={{borderTopLeftRadius: 0, borderBottomLeftRadius: 0, position: 'absolute', height: 40, right: 0}}
          >
            Upload
          </Button>
        </FormGroup>
      </label>
  );
}


const ValidationTextField = styled(TextField)({
  '& input:valid + fieldset': {
    borderLeftWidth: 6,
    borderColor: '#999',
  },
  '& input:valid:hover + fieldset': {
    borderLeftWidth: 6,
    borderColor: '#999',
  },
  '& input:valid:focus + fieldset': {
    borderLeftWidth: 6,
    padding: '4px !important', // override inline-style
  },
});


const CustomAccordion = (props) => {
  const { title, extra } = props;
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {courseContents?.map((content, index) => (
        <Accordion 
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          TransitionProps={{ unmountOnExit: true }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography noWrap sx={{ width: '35%', flexShrink: 0 }}>{content.title}</Typography>
            <Typography noWrap sx={{ color: 'text.secondary'}}>{content.lectureCount} lectures</Typography>
          </AccordionSummary>
          {content.lectures?.map((lec, index) => (
            <AccordionDetails key={index}>
              <FeaturedVideoIcon />
              <Typography sx={{ width: '45%', flexShrink: 1 }}>{lec.title}</Typography>
              <Typography sx={{ color: 'text.secondary' }}>{lec.timeStamp}</Typography>
              <CustomFullScreenDialog>
                <div className="formInputs">
                  <InputLabel className="inputHeading" htmlFor="validation">Title</InputLabel>
                  <ValidationTextField
                    required
                    size="small"
                    id="validation"
                    fullWidth
                  />
                </div>

                <div className="formInputs">
                  <InputLabel className="inputHeading" htmlFor="validation">Video file</InputLabel>
                  <UploadButton />
                </div>

                <div>
                  <InputLabel className="inputHeading" htmlFor="validation">Description</InputLabel>
                  <ValidationTextField required multiline rows={8} fullWidth/>
                </div>
              </CustomFullScreenDialog>
            </AccordionDetails>
          ))}
        </Accordion>
      ))}
    </div>
  );
}

export default CustomAccordion;