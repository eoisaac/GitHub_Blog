import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/Router'
import './styles/main.css'

export const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}
