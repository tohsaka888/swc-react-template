/*
 * @Author: tohsaka888
 * @Date: 2022-07-28 16:09:46
 * @LastEditors: tohsaka888
 * @LastEditTime: 2022-07-29 10:53:38
 * @Description: 请填写简介
 */

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
