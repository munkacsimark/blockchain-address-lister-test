import React, { useEffect, useState } from 'react'
import style from './no-page.module.css'

const REDIRECT_TIME = 10 // sec

const NoPage = ({ history }) => {
  const [redirectCounter, setRedirectCounter] = useState(REDIRECT_TIME)

  useEffect(() => {
    const timer = setInterval(() => {
      redirectCounter === 1
        ? history.push('/')
        : setRedirectCounter((currentValue) => currentValue - 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [redirectCounter, history])

  return (
    <div className={style.container}>
      <h2>
        This is an unknown URL{' '}
        <span role='img' aria-label='sad emoji'>
          😥
        </span>
      </h2>
      <span>
        Redirecting in <time>{redirectCounter}</time> sec...
      </span>
    </div>
  )
}

export default NoPage
