import React from 'react'
import style from './loader.module.css'

const sizes = {
  BIG: 'normal',
  SMALL: 'small',
}

const Loader = ({ size = sizes.SMALL, className }) => {
  return (
    <span
      className={`${style.loader} ${
        size === sizes.BIG ? style.big : ''
      } ${className}`}
      role='img'
      aria-label='loader'
    ></span>
  )
}

export default Loader
export { sizes as loaderSizes }
