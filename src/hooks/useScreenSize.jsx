import React, { useDeferredValue, useEffect, useState } from 'react'

function useScreenSize() {
  const [screenSize, setScreenSize] = useState({
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