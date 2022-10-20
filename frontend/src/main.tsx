import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Router } from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={Router} />
)
