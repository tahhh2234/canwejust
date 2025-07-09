import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/HomePage.tsx'
import WatchPage from './pages/WatchPage.tsx'
import Listen from './pages/ListenPage.tsx'
import Eat from './pages/EatPage.tsx'
import Play from './pages/PlayPage.tsx'
import Travel from './pages/TravelPage.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header.tsx'
import About from './pages/AboutPage.tsx'
import Footer from './components/Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch" element={<WatchPage />} />
        <Route path="/listen" element={<Listen />} />
        <Route path="/eat" element={<Eat />} />
        <Route path="/play" element={<Play />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
