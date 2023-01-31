import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Dropzone from './components/dropzone/Dropzone';
import FileList from './components/file_list/FileList';
import LogFeed from './components/log_feed/LogFeed';

export default function App() {
  const [files, setFilesState] = React.useState([] as File[]);

  const extFilesHandler = (files: File[]) => {
    console.info(files)
    if (files && files.length > 0) {
      setFilesState(files);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 2 }}>
        <Dropzone
          extFilesHandler={extFilesHandler}
        />
      <Box/>
      <Box sx={{ my: 2 }}></Box>
        <FileList
          files = {files}
        />
      </Box>
      <Box sx={{ my: 2 }}>
        <LogFeed
          files = {files}
        />
      </Box>
    </Container>
  )
}