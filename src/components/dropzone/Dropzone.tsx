import React from 'react'
import './style.css';
import CloudUploadOutlined from '@mui/icons-material/CloudUploadOutlined';
import { DropzoneArea } from 'react-mui-dropzone';

export default function Dropzone() {
  return (
    <DropzoneArea
      onChange={(files: File[]) => console.log('Files:', files)}
      useChipsForPreview
      filesLimit={10}
      Icon = {CloudUploadOutlined}
  />
  )
}