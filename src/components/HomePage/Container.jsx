import React from 'react'
import { Link } from 'react-router-dom'
import style from './index.module.css'

function Container() {
  return (
    <div className={style['container']}>
      <div className={`${style['main-title']} ${style['mb-8']}`}>
        HomePage
      </div>
      <div className={`${style['sub-title']} ${style['mb-8']}`}>
        Welcome!
      </div>
      <Link to={'/hello-world'}>Go To HelloWorld</Link>
    </div>
  )
}

export default Container
