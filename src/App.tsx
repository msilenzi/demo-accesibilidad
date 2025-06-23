import { Route, Routes } from 'react-router'

import { MainLayout } from './layouts/MainLayout'
import { HomePage } from './pages/HomePage'
import { LiveRegionPage } from './pages/LiveRegionPage'

export function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="live-demo" element={<LiveRegionPage />} />
      </Route>
    </Routes>
  )
}
