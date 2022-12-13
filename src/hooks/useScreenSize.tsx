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