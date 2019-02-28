import React, { Component } from 'react'
import Layouts from '../component/Layouts'
import { getCurrency } from '../app/api/currencyAPI'
import { Paper, TextField, FormControl, InputLabel, MenuItem, Select, Button } from '@material-ui/core'
import Link from 'next/link'

class Index extends Component {

    state = {
        currencyItems: [],
        type: 'Individual',
        currency: '',
        accountName: '',
        accountNumber: '',
        swiftCode: '',
        address: '',
        city: '',
        country: '',
        firstName: '',
        lastName: '',
        companyName: '',
    }

    async componentDidMount() {
        try {
            const currency = await getCurrency()
            if (currency.status === 200) throw Error()
            this.setState({ currencyItems: currency })
        } catch (e) {
            this.setState({ error: 'Terjadi kesalahan pada saat memuat data' })
        }
        this.setState({ initialLoading: false })
        this.getData()
    }

    getData() {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        let bankLS = JSON.parse(localStorage.getItem('bank')) || []
        const prevItem = bankLS.find(p => p.id == id)
        this.setState({
            res: prevItem,
            type: prevItem.type,
            currency: prevItem.currency,
            accountName: prevItem.accountName,
            accountNumber: prevItem.accountNumber,
            swiftCode: prevItem.swiftCode,
            address: prevItem.address,
            city: prevItem.city,
            country: prevItem.country,
            firstName: prevItem.firstName,
            lastName: prevItem.lastName,
            companyName: prevItem.companyName,
        })
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { type, currencyItems, currency } = this.state
        return (
            <Layouts title='Bank Central Dion'>
                <div className="container">
                    <Paper>
                        <form className="container ml-104">
                            <div>
                                <TextField
                                    className="m-bgs w-bgs"
                                    id='accountName'
                                    name='accountName'
                                    label='Account Name'
                                    value={this.state.accountName}
                                    onChange={this.handleChange}
                                    disabled
                                />
                                <TextField
                                    className="m-bgs w-bgs"
                                    id='accountNumber'
                                    name='accountNumber'
                                    label='Account Number'
                                    value={this.state.accountNumber}
                                    onChange={this.handleChange}
                                    disabled
                                />
                                <TextField
                                    className="m-bgs w-bgs"
                                    id='swiftCode'
                                    name='swiftCode'
                                    label='Swift Code'
                                    value={this.state.swiftCode}
                                    onChange={this.handleChange}
                                    disabled
                                />
                                <TextField
                                    className="m-bgs w-bgs"
                                    id='address'
                                    name='address'
                                    label='Address'
                                    value={this.state.address}
                                    onChange={this.handleChange}
                                    disabled
                                />
                                <TextField
                                    className="m-bgs w-bgs"
                                    id='city'
                                    name='city'
                                    label='City'
                                    value={this.state.city}
                                    onChange={this.handleChange}
                                    disabled
                                />
                                <TextField
                                    className="m-bgs w-bgs"
                                    id='country'
                                    name='country'
                                    label='Country'
                                    value={this.state.country}
                                    onChange={this.handleChange}
                                    disabled
                                />
                                <FormControl className="m-bgs w-bgs">
                                    <InputLabel htmlFor="currency">Currency</InputLabel>
                                    <Select
                                        value={currency}
                                        onChange={this.handleChange}
                                        disabled
                                        inputProps={{
                                            name: 'currency',
                                            id: 'currency',
                                        }}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        {currencyItems.map(n => <MenuItem value={n.currencies[0].code}>{n.currencies[0].symbol} -- {n.name}</MenuItem>)}
                                    </Select>
                                </FormControl>
                                <FormControl className="m-bgs w-bgs">
                                    <InputLabel htmlFor="type">Type</InputLabel>
                                    <Select
                                        value={this.state.type}
                                        onChange={this.handleChange}
                                        disabled
                                        inputProps={{
                                            name: 'type',
                                            id: 'type',
                                        }}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value='Individual'>Individual</MenuItem>
                                        <MenuItem value='Company'>Company</MenuItem>
                                    </Select>
                                </FormControl>
                                {type === 'Individual' &&
                                    <span>
                                        <TextField
                                            className="m-bgs w-bgs"
                                            id='firstName'
                                            name='firstName'
                                            label='First Name'
                                            value={this.state.firstName}
                                            onChange={this.handleChange}
                                            disabled
                                        />
                                        <TextField
                                            className="m-bgs w-bgs"
                                            id='lastName'
                                            name='lastName'
                                            label='Last Name'
                                            value={this.state.lastName}
                                            onChange={this.handleChange}
                                            disabled
                                        />
                                    </span>
                                }
                                {type === 'Company' &&
                                    <span>
                                        <TextField
                                            className="m-bgs w-bgs"
                                            id='companyName'
                                            name='companyName'
                                            label='Company Name'
                                            value={this.state.companyName}
                                            onChange={this.handleChange}
                                            disabled
                                        />
                                    </span>
                                }
                            </div>
                            <Link href="/">
                                <Button
                                    className='btnSbmt ml-24 w-bgs'
                                    variant='contained'
                                >
                                    Okay!
                                </Button>
                            </Link>
                        </form>
                    </Paper>
                </div>
            </Layouts>
        );
    }
}

export default Index;