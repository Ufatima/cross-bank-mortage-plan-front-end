import React, { useState } from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import axios from 'axios'

import ProspectsList from '../ProspectList'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
)

const FileUploadButton = () => {
  const classes = useStyles()

  const [selectedFile, setselectedFile] = useState('')
  const [prospectsData, setprospectsData] = useState('')

  const onChangeHandler = (event) => {
    setselectedFile(event.target.files[0])
  }
  
  const onClickHandler = async() => {
    const data = new FormData() 
    data.append('file', selectedFile)
    const res = await axios.post("http://crosskeyspringrest-env.eba-2nhmp3dm.us-east-1.elasticbeanstalk.com/upload", data)
    setprospectsData(res.data)
  }
  
  const reset = () => {
    setprospectsData('')
  }

  return (
    <div className={classes.root}>
      <input
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        name="file"
        onChange={onChangeHandler}
      />
      <Button type="button" variant="contained" color="primary" onClick={onClickHandler}>Upload</Button>
      <Button type="button" variant="contained" onClick={reset} >
          Reset
      </Button>
      { prospectsData && <ProspectsList prospectsList={prospectsData} />}
    </div>
  )
}
FileUploadButton.displayName="FileUploadButton"
export default FileUploadButton
