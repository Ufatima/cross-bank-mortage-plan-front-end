import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

import ProspectsTableRow from '../ProspectsTableRow'

const useStyles = makeStyles((theme) =>({
  root: {
    
    textAlign: 'center',
    marginTop: '2%',
    '& > *': {
        margin: theme.spacing(),
    },
  },
  container: {
    margin: 'auto',
    maxHeight: 500,
  },
}))

const ProspectsList = (prospectsList) => {
  const classes = useStyles()
  const allProspect = prospectsList.prospectsList
  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
                <TableCell>Customer Name</TableCell>
                <TableCell>Total Loan</TableCell>
                <TableCell>Interest</TableCell>
                <TableCell>Years</TableCell>
                <TableCell>Monthly Payments</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              allProspect.map(prospect => (
                <ProspectsTableRow key={prospect.customerName}
                    customerName={prospect.customerName}
                    totalLoan={prospect.totalLoan}
                    interest={prospect.interest}
                    years={prospect.years}
                    monthlyPayments={prospect.result}
                />
              )
              )
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}
ProspectsList.displayName="ProspectsList"
export default ProspectsList