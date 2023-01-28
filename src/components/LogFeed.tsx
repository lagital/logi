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
  return colorMap.get(index) || "#E1BEE7";
};

export default function LogFeed() {
  return (
    <Box>
      <Card sx={{p: 2, my: 1}} style={{backgroundColor: "" + getColor(0)}}>
        <Typography variant="caption" display="block" gutterBottom>file name</Typography>
        <Typography variant="body2" gutterBottom>somlog text</Typography>
      </Card>
      <Card sx={{p: 2, my: 1}} style={{backgroundColor:  "" + getColor(1)}}>
        <Typography variant="caption" display="block" gutterBottom>file name</Typography>
        <Typography variant="body2" gutterBottom>somlog text</Typography>
      </Card>
      <Card sx={{p: 2, my: 1}} style={{backgroundColor: "" + getColor(2)}}>
        <Typography variant="caption" display="block" gutterBottom>file name</Typography>
        <Typography variant="body2" gutterBottom>somlog text</Typography>
      </Card>
      <Card sx={{p: 2, my: 1}} style={{backgroundColor: "" + getColor(3)}}>
        <Typography variant="caption" display="block" gutterBottom>file name</Typography>
        <Typography variant="body2" gutterBottom>somlog text</Typography>
      </Card>
      <Card sx={{p: 2, my: 1}} style={{backgroundColor: "" + getColor(4)}}>
        <Typography variant="caption" display="block" gutterBottom>file name</Typography>
        <Typography variant="body2" gutterBottom>somlog text</Typography>
      </Card>
    </Box>
  );
}