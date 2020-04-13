import React from 'react'
import { dateToString } from '../../helpers'
import style from './transaction.module.css'

const Transaction = ({ transaction: { hash, confirmed }, ...props }) => {
  return (
    <article className={style.container} {...props}>
      <h3>{hash}</h3>
      <time>{dateToString(new Date(confirmed))}</time>
    </article>
  )
}

export default Transaction
