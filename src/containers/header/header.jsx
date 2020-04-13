import React from 'react'
import { connect } from 'react-redux'
import { setSelectedAddress, clearStorage } from '../../redux/actions'
import { getSelectedAddress, getAddresses } from '../../redux/selectors'
import { mergeSelectors } from '../../helpers'
import Select from '../../components/select/select'
import Button from '../../components/button/button'
import style from './header.module.css'

const Header = ({
  selectedAddress,
  addresses,
  setSelectedAddress,
  clearStorage,
  history,
}) => {
  const clickHandler = () => {
    clearStorage(selectedAddress)
    history.push('/')
  }
  const selectHandler = (event) => {
    setSelectedAddress(event.currentTarget.value)
    history.push('/')
  }

  return (
    <header className={style.container}>
      <div className={style.selector}>
        <span>Address:</span>
        <div>
          <Select
            options={addresses}
            selected={selectedAddress}
            onChange={selectHandler}
          />
        </div>
      </div>
      <Button className={style.button} text='Refresh' onClick={clickHandler} />
    </header>
  )
}

export default connect(mergeSelectors([getSelectedAddress, getAddresses]), {
  setSelectedAddress,
  clearStorage,
})(Header)
