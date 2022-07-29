/*
 * @Author: tohsaka888
 * @Date: 2022-07-29 10:36:09
 * @LastEditors: tohsaka888
 * @LastEditTime: 2022-07-29 10:56:11
 * @Description: Hello world
 */

import React from 'react'
import { Link } from 'react-router-dom'
import style from './index.module.css'

function Container() {
  return (
    <div className={style['container']}>
      <div className={style['title']}>
        Hello,World!
      </div>
      <div className={style['back']}>
        <Link to={'/'}>
          Back
        </Link>
      </div>
    </div>
  )
}

export default Container
