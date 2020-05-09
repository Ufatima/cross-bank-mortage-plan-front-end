import React from "react"
import PropTypes from 'prop-types'

import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

const ProspectsTableRow = ({customerName, totalLoan, interest, years, monthlyPayments}) => {
    return (
        <TableRow>
            <TableCell>{customerName}</TableCell>
            <TableCell>{totalLoan}</TableCell>
            <TableCell>{interest}</TableCell>
            <TableCell>{years}</TableCell>
            <TableCell>{monthlyPayments}</TableCell>
        </TableRow>
    )
}
ProspectsTableRow.displayName = 'ProspectsTableRow'
ProspectsTableRow.propTypes = {
    customerName: PropTypes.string.isRequired,
    totalLoan: PropTypes.number.isRequired,
    interest: PropTypes.number.isRequired,
    years: PropTypes.number.isRequired,
}
export default ProspectsTableRow