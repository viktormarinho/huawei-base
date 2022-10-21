import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Router } from './App'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={Router} />
  </QueryClientProvider>
)
