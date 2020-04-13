import React from 'react'
import { connect } from 'react-redux'
import { fetchAddress } from '../../redux/actions'
import { getSelectedAddress } from '../../redux/selectors'
import style from './header.module.css'

const Header = ({ title, selectedAddress, fetchAddress }) => {
  const clickHandler = () => fetchAddress(selectedAddress, true)

  return (
    <header className={style.container}>
      <h1>{title}</h1>
      <button onClick={clickHandler}>Refresh</button>
    </header>
  )
}

export default connect(getSelectedAddress, { fetchAddress })(Header)

// loader, address selector, refresh button
