import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '../components/layouts/DefaultLayout'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        {/* <Route path="/" element={<Page />} /> */}
      </Route>

      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  )
}
