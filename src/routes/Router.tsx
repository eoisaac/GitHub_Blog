import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '../components/layouts/DefaultLayout'
import { Home } from '../pages/Home'
import { Post } from '../pages/Post'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:number" element={<Post />} />
      </Route>

      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  )
}
