import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'

import { App } from './App.tsx'

import 'modern-normalize/modern-normalize.css'

const root = document.getElementById('root')
if (!root) throw new Error('root not found')

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
