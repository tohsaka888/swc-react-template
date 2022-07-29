/*
 * @Author: tohsaka888
 * @Date: 2022-07-29 11:34:04
 * @LastEditors: tohsaka888
 * @LastEditTime: 2022-07-29 11:38:58
 * @Description: 请填写简介
 */


import React, { useDeferredValue, useEffect, useState } from 'react'

function useScreenSize(): { width: number; height: number } {
  const [screenSize, setScreenSize] = useState<{ width: number; height: number }>({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  const deferredScreenSize = useDeferredValue(screenSize)

  useEffect(() => {
    window.addEventListener('resize', () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    })

    return () => {
      window.removeEventListener('resize', () => {
        setScreenSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      })
    }
  }, [])

  return deferredScreenSize
}

export default useScreenSize