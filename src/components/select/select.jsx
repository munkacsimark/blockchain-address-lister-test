import React from 'react'
import style from './select.module.css'

const Select = ({ options = [], selected, onChange }) => {
  return (
    <select
      className={style.select}
      onChange={onChange}
      value={selected}
      alt={selected}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

export default Select
