/*
 * @Author: tohsaka888
 * @Date: 2022-07-28 16:09:46
 * @LastEditors: tohsaka888
 * @LastEditTime: 2022-07-28 17:03:25
 * @Description: 请填写简介
 */

import React from 'react'
import style from './index.module.css'

function Container() {
  return (
    <div className={style['container']}>
      <div className={style['main-title']}>
        HomePage
      </div>
      <div className={style['sub-title']}>
        Welcome!
      </div>
    </div>
  )
}

export default Container
