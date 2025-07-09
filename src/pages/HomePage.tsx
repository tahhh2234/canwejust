import { useEffect, useState } from 'react'
import '../scss/App.scss'
import { FaTiktok, FaYoutube } from 'react-icons/fa'
import { SiInstagram } from 'react-icons/si'

function Home() {
  const words = [
    'watch',
    'listen',
    'eat',
    'travel',
    'play'
  ]

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [words.length])



  return (
    <div className="home-container">

      <div className="home-display">
        <div className="home-title">
          canwejust
        </div>

        <div className="home-list">
          <div className="word-container" style={{ transform: `translateY(-${index * 3}rem)` }}>
            {words.map((word, i) => (
              <div key={word} className={`word ${i === index ? 'active' : ''}`}>
                {word}
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className="home-links">
        <div className="button">
          <a href="https://www.youtube.com/@canwejustofficial" target='_blank' className='link'><FaYoutube />YouTube</a>
        </div>
        <div className="button">
          <a href="https://www.tiktok.com/@canwejust__" target='_blank' className='link'><FaTiktok />TikTok</a>
        </div>
        <div className="button">
          <a href="https://www.instagram.com/canwejust__/" target='_blank' className='link'><SiInstagram />Instagram</a>
        </div>
      </div>
    </div>
  )
}

export default Home
