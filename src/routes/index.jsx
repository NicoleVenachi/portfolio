import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import { Layout } from '../containers/Layout'
import Home from '../pages/Home'
import ProjectsPage from '../pages/ProjectsPage'
import ScrollToTop from '../components/ScrollToTop'

function App() {

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/projects' element={<ProjectsPage />} />
        </Route>

        <Route path='*' element={<h1> Not Found </h1>} />
      </Routes>
    </Router>
  )
}

export default App
