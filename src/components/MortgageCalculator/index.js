import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { useFormik } from 'formik'

import FileUploadButton from '../FileUploadButton'

const axios = require('axios')

const useStyles = makeStyles((theme) =>({
  root: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    color: theme.palette.text.secondary,
    textAlign: 'center',
    padding: theme.spacing(2),
    marginTop: '5%',
  },
  paper:{
      padding: theme.spacing(2),
      maxWidth: '65%',
      margin: 'auto',
  },
  form:{
    padding: theme.spacing(2),
    '& > *': {
      margin: theme.spacing(1),
      height: 50,
    },
  },
}))

const MortgegeCalculateForm = () => {

  const classes = useStyles()
  const [data, setData ] = useState('')

  let { handleChange, handleSubmit, values} = useFormik({
    initialValues: {
      name: '',
      totalLoan: '',
      interestRate: '',
      years: '',
    },
    async onSubmit(values) {
      const newPersistance = { 
        customerName: values.name, 
        totalLoan: values.totalLoan,
        interest: values.interestRate,
        years: values.years
      }
      const res = await axios.post(
        'http://crosskeyspringrest-env.eba-2nhmp3dm.us-east-1.elasticbeanstalk.com/prospect', newPersistance      
      )
      setData(res.data)
    },
  })

  const reset = () => {
    setData('')
    values.name=''
    values.interestRate=''
    values.years=''
    values.totalLoan=''
  }
  
  return (
      <div className={classes.root}>
        <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={3} >
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1">
                  Calculate Loan
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <form className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit}>
                <input name="name" type="text" value={values.name} placeholder="Customer Name" onChange={handleChange} />
                <input name="totalLoan" type="number" value={values.totalLoan} placeholder="Total Loan" onChange={handleChange} />
                <input name="interestRate" type="number" value={values.interestRate} placeholder="Interest" onChange={handleChange} />
                <input name="years" type="number" value={values.years} placeholder="Years" onChange={handleChange} />
                <Button variant="contained" color="primary" type="submit">
                  submit
                </Button>
                <Button type="button" variant="contained" onClick={reset} >
                  Reset
                </Button>
              </form>
            </Grid>
            <p>{data}</p>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={3} >
            <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                    Calculate Loan by uploading a File
                </Typography>
            </Grid>
            <Grid item xs={12}>
              <FileUploadButton />
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}
MortgegeCalculateForm.displayName="MortgegeCalculateForm"
export default MortgegeCalculateForm