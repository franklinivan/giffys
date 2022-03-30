import { useState, useEffect, useRef } from 'react'

export const useNearScreen = ({ distance = '100px' } = {}) => {
  const [isNearScreen, setNearScreen] = useState(false)
  const elementRef = useRef()

  useEffect(() => {
    const onChange = (entries, observer) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setNearScreen(true)
        observer.disconnect()
      }
    }

    const observer = new IntersectionObserver(onChange, { // eslint-disable-line
      rootMargin: distance
    })

    observer.observe(elementRef.current)
    return () => observer.disconnect()
  })

  return { isNearScreen, elementRef }
}
