import axios from 'axios'

const TOKEN = '5b3cd0089c504d778360279a5bada660'
const DOMAIN = '//api.blockcypher.com'
const API = '/v1/btc/test3'

const fetchAddress = (hash) =>
  new Promise((resolve, reject) => {
    axios
      .get(`${DOMAIN}${API}/addrs/${hash}/full?token=${TOKEN}`)
      .then((response) => resolve(response.data))
      .catch((error) => {
        console.error(error)
        reject(error)
      })
  })

export { fetchAddress }
