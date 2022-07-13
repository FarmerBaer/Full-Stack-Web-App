import React from 'react'
import {Paper}  from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Signin from './Signin';
import Signup from './Signup';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
  
function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}
  

export default function Sign() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <Paper elevation={20} sx={{ width: '70vh', margin: '9vh auto'}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered variant="fullWidth">
          <Tab label="Sign In" {...a11yProps(0)} />
          <Tab label="Sign Up" {...a11yProps(1)} />
        </Tabs>
      <TabPanel value={value} index={0}>
        <Signin/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Signup/>
      </TabPanel>
    </Paper>
  )
}

