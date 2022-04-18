import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Cities from '../cities/cities'
import Zurich from '../cities/zurich/zurich'
import Geneva from '../cities/geneva/geneva'
import Bern from '../cities/bern/bern'
import Lausanne from '../cities/lausanne/lausanne'
import Intro from '../intro/intro'
import './style.scss'
import { AnimatePresence } from 'framer-motion'

const App = () => {
  const location = useLocation()

  return (
    <div className="app" id="app">
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Intro />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/cities/zurich" element={<Zurich />} />
          <Route path="/cities/geneva" element={<Geneva />} />
          <Route path="/cities/bern" element={<Bern />} />
          <Route path="/cities/lausanne" element={<Lausanne />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
