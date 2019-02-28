import axios from 'axios'

const FETCH = axios.create({
  baseURL: 'https://restcountries.eu/rest/v2/all',
  timeout: 10000,
})

export default FETCH