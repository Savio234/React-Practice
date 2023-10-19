import React, { useEffect, useState } from 'react'
import './ScrollToTop.css'

const ScrollToTop = () => {
    const [backToTop, setBackToTop] = useState(false)
    useEffect(() => {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
          setBackToTop(true)
        } else {
          setBackToTop(false)
        }
      })
    }, [])

    const scrollUp = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }
    
  return (
    <div>
      {
        backToTop && (
          <div className='scroll' onClick={scrollUp}>
            ^
          </div>
      )}
    </div>
  )
}

export default ScrollToTop