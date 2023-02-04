import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Box from '@mui/material/Box';
import { MetaFile } from '../../meta/MetaFile';
import getColor from './StandardColorMap';
import MetaLine from '../../meta/MetaLine';

//[1, "#BBDEFB"],
//[2, "#B2DFDB"],
//[3, "#F0F4C3"],
//[4, "#FFECB3"],
//[5, "#D7CCC8"],
//[6, "#CFD8DC"]

interface LogFeedProps {
  metaFiles: MetaFile[]
}

export default function LogFeed(props: LogFeedProps) {
  const allMetaLines: MetaLine[] = []

  props.metaFiles.map((metaFile, i) => (
    metaFile.metaLines.map((metaLine) => (
      allMetaLines.push(metaLine)
    ))
  ))
  allMetaLines.sort((a,b) => a.timestamp - b.timestamp)

  return (
    <Box>
      {allMetaLines.map((metaLine, i) => (
          <Card key={metaLine.fileName + i.toString()} sx={{p: 2, my: 1}} style={{backgroundColor: "" + getColor(metaLine.fileType)}}>
            <Typography variant="caption" display="block" gutterBottom>{metaLine.fileName}</Typography>
            <Typography variant="body2" gutterBottom>{(new Date(metaLine.timestamp)).toISOString() + ": " + metaLine.label}</Typography>
          </Card>
        ))}
    </Box>
  );
}