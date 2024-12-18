import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'

const root = document.getElementById('root') as HTMLDivElement

createRoot(root).render(<App />)
