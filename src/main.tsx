import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.tsx'
import WatchPage from './pages/WatchPage.tsx'
import Listen from './pages/Listen.tsx'
import Eat from './pages/Eat.tsx'
import Play from './pages/Play.tsx'
import Travel from './pages/Travel.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/watch" element={<WatchPage />} />
      <Route path="/listen" element={<Listen />} />
      <Route path="/eat" element={<Eat />} />
      <Route path="/play" element={<Play />} />
      <Route path="/travel" element={<Travel />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
