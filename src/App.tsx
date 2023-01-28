import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Dropzone from './components/dropzone/Dropzone';
import FileList from './components/FileList';
import LogFeed from './components/LogFeed';

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 2 }}>
        <Dropzone />
      <Box/>
      <Box sx={{ my: 2 }}></Box>
        <FileList />
      </Box>
      <Box sx={{ my: 2 }}>
        <LogFeed />
      </Box>
    </Container>
  )
}