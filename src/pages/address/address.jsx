import React from 'react'
import { useParams } from 'react-router-dom'

const Address = () => {
  const { address } = useParams()
  return <h1>ADDRESS: {address}</h1>
}

export default Address
