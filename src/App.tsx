import { QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/Router'
import { queryClient } from './services/reactQuey/client'
import './styles/main.css'

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </QueryClientProvider>
  )
}
