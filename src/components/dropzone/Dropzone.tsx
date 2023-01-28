import React from 'react'
import './style.css';
import CloudUploadOutlined from '@mui/icons-material/CloudUploadOutlined';
import { DropzoneArea } from 'react-mui-dropzone';

interface DropzoneProps {
  extFilesHandler: (files: File[]) => any
}

export default function Dropzone(props: DropzoneProps) {
  return (
    <DropzoneArea
      onChange={(files: File[]) => props.extFilesHandler(files)}
      useChipsForPreview
      filesLimit={10}
      Icon = {CloudUploadOutlined}
      dropzoneText = {""}
      showAlerts = {false}
  />
  )
}