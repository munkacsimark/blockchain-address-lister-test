import React from 'react'
import style from './loader.module.css'

const sizes = {
  BIG: 'normal',
  SMALL: 'small',
}

const Loader = ({ size = sizes.SMALL }) => {
  return (
    <span
      className={`${style.loader} ${size === sizes.BIG ? style.big : ''}`}
      role='img'
      aria-label='loader'
    ></span>
  )
}

export default Loader
export { sizes as loaderSizes }
