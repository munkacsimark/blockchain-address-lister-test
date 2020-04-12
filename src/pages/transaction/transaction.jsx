import React from 'react'
import { useParams } from 'react-router-dom'

const Transaction = () => {
  const { transaction } = useParams()
  return <h1>DETAILS: {transaction}</h1>
}

export default Transaction
