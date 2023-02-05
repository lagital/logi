import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import { MetaFile } from '../../meta/MetaFile';
import getColor from '../log_feed/StandardColorMap';

interface FileListProps {
  metaFiles: MetaFile[]
}

export default function FileList(props: FileListProps) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="file table">
        <TableHead>
          <TableRow>
            <TableCell>File</TableCell>
            <TableCell>Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.metaFiles.map((metaFile) => (
            <TableRow
              key={metaFile.name.toString()}
              sx={{'&:last-child td, &:last-child th': { border: 0}}}
            >
              <TableCell component="th" scope="row">
                {metaFile.name}
              </TableCell>
              <TableCell>
                <Chip label={metaFile.type} variant="outlined" sx={{backgroundColor: "" + getColor(metaFile.type)}}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}