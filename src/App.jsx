import { Login, Home, Movies, TVseries, Bookmarked } from './pages'

import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <div className="border-2 border-red-600 bg-[#10141E] text-white md:flex">
      <Navbar/>
      <Routes>
        { /* <Route path="/" element={<Login />} /> */ }
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvseries" element={<TVseries />} />
        <Route path="/bookmarked" element={<Bookmarked />} />
      </Routes>
    </div>
  )
}

export default App
