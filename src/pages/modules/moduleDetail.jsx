import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import SessionTab from './sessionTab.component';
import StudentsTab from './studentsTab.component';
import SummaryTab from './summaryTab.component';
import { MarkList } from './markList.component';

export default function ModuleDetail() {
  const [value, setValue] = React.useState('1');


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>

        <h1 style={{lineHeight:0.1}}>M001: Introduction to React</h1>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Sessions" value="1" />
            <Tab label="Students" value="2" />
            <Tab label="Attendance" value="3" />
            <Tab label="MarkList" value="4" />
            <Tab label="Summary" value="5" />
          </TabList>
        </Box>
        <TabPanel value="1">
            <SessionTab/>
        </TabPanel>
        <TabPanel value="2"><StudentsTab/></TabPanel>
        <TabPanel value="3"></TabPanel>
        <TabPanel value="4"><MarkList/></TabPanel>
        <TabPanel value="5"><SummaryTab/></TabPanel>
      </TabContext>
    </Box>
  );
}
