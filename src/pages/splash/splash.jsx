import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Loader, { loaderSizes } from '../../components/loader/loader'
import { fetchAddress } from '../../redux/actions'
import { getSelectedAddress, getAppHasStarted } from '../../redux/selectors'
import { mergeSelectors } from '../../helpers'
import style from './splash.module.css'

const Splash = ({ selectedAddress, fetchAddress, history, appHasStarted }) => {
  useEffect(() => {
    fetchAddress(selectedAddress)
  }, [fetchAddress, selectedAddress])

  useEffect(() => {
    if (appHasStarted) {
      history.push(`/address/${selectedAddress}`)
    }
  }, [appHasStarted, history, selectedAddress])

  return (
    <div className={style.container}>
      <Loader size={loaderSizes.BIG} />
      <h2>Loading your experience</h2>
    </div>
  )
}

export default connect(mergeSelectors([getSelectedAddress, getAppHasStarted]), {
  fetchAddress,
})(Splash)
