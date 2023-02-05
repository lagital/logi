import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Dropzone from './components/dropzone/Dropzone';
import FileList from './components/file_list/FileList';
import LogFeed from './components/log_feed/LogFeed';
import { MetaFile } from './meta/MetaFile';
import './style.css';

export default function App() {
  const [metaFiles, setMetaFilesState] = React.useState([] as MetaFile[])

  const extFilesHandler = (files: File[]) => {
    const newMetaFiles: MetaFile[] = []
    var   inputFiles: File[] = []

    if (files.length == 0) {
      setMetaFilesState([]);
    } else {
      inputFiles = files
    }

    for (var f of inputFiles) {
      const metaFile = MetaFile.buildMetaFile(f)
      MetaFile.buildMetLines(f, metaFile).then((lines) => {
        metaFile.metaLines = lines
        newMetaFiles.push(metaFile)
        setMetaFilesState([...[] as MetaFile[], ...newMetaFiles]);
      })
    }
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 2 }}>
        <Dropzone
          extFilesHandler={extFilesHandler}
        />
      <Box/>
      <Box sx={{ my: 2 }}></Box>
        <FileList
          key={metaFiles.toString()}
          metaFiles = {metaFiles}
        />
      </Box>
      <Box sx={{ my: 2 }}>
        <LogFeed
          key={metaFiles.toString()}
          metaFiles = {metaFiles}
        />
      </Box>
    </Container>
  )
}