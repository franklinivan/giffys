import { useState, useEffect } from 'react'

export const useNearScreen = ({ distance = '100px', elementRef, once = true } = {}) => {
  const [isNearScreen, setNearScreen] = useState(false)

  useEffect(() => {
    const onChange = (entries, observer) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setNearScreen(true)
        once && observer.disconnect()
      } else {
        !once && setNearScreen(false)
      }
    }

    const observer = new IntersectionObserver(onChange, { // eslint-disable-line
      rootMargin: distance
    })

    observer.observe(elementRef.current)
    return () => observer.disconnect()
  })

  return {
    isNearScreen
  }
}
