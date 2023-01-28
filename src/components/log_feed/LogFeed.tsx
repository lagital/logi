import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';

const colorMap = new Map<number, String>([
  [0, "#E1BEE7"],
  [1, "#BBDEFB"],
  [2, "#B2DFDB"],
  [3, "#F0F4C3"],
  [4, "#FFECB3"],
  [5, "#D7CCC8"],
  [6, "#CFD8DC"]
]);

function getColor(index: number): String {
  return colorMap.get(index % 7) || "#E1BEE7";
};

interface LogFeedProps {
  files: File[]
}

export default function LogFeed(props: LogFeedProps) {
  return (
    <Box>
      {props.files.map((file, i) => (
        <Card key={i} sx={{p: 2, my: 1}} style={{backgroundColor: "" + getColor(i)}}>
          <Typography variant="caption" display="block" gutterBottom>{file.name}</Typography>
          <Typography variant="body2" gutterBottom>{file.size}</Typography>
        </Card>
      ))}
    </Box>
  );
}