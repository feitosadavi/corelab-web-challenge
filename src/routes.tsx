import VehiclesPage from 'pages/Vehicles'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const ProjectRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<VehiclesPage />} />
        <Route path="home/*" element={<VehiclesPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default ProjectRoutes