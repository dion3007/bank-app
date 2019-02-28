import React, { Component } from 'react';
import Layouts from '../component/Layouts'
import { withStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Button } from '@material-ui/core';
import DelBankDataFromLocal from '../app/lib/DelBankDataFromLocal'
import Link from 'next/link'

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
  });

class Index extends Component {
    state = {
        res: []
    }

    componentDidMount() {
        this.getData()
    }

    getData() {
        this.setState({
            res: JSON.parse(localStorage.getItem('bank')),
        })
    }

    handleDelete = (params) => {
        DelBankDataFromLocal({
            id: params
        })
        this.getData()
    }

    render() {
        const { classes } = this.props
        return (
            <Layouts title='Bank Central Dion'>
                <div className="container">
                    <Link href="/AddBankData">
                        <Button
                            className='m-bgs'
                            variant="contained"
                            color="primary"
                        >+ Add</Button>
                    </Link>
                    <Paper className={classes.root}>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Account Number</TableCell>
                                    <TableCell align="right">Swift Code</TableCell>
                                    <TableCell align="right">Address</TableCell>
                                    <TableCell align="right">Currency</TableCell>
                                    <TableCell align="right">Type</TableCell>
                                    <TableCell align="right">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.res.map(row => (
                                    <TableRow key={row.id}>
                                        <TableCell component="th" scope="row">
                                            {row.accountNumber}
                                        </TableCell>
                                        <TableCell align="right">{row.swiftCode}</TableCell>
                                        <TableCell align="right">{row.address}</TableCell>
                                        <TableCell align="right">{row.currency}</TableCell>
                                        <TableCell align="right">{row.type}</TableCell>
                                        <TableCell align="right"><Button onClick={() => this.handleDelete(row.id)}>Delete</Button></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                </div>
            </Layouts>
        );
    }
}

export default withStyles(styles)(Index);
