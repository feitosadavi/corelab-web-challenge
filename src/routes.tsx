import AddVehicle from 'pages/AddVehicle'
import VehiclesPage from 'pages/Vehicles'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const ProjectRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<VehiclesPage />} />
        <Route path="home/*" element={<VehiclesPage />} />
        <Route path="add-vehicle/*" element={<AddVehicle />} />
      </Routes>
    </BrowserRouter>
  )
}

export default ProjectRoutes