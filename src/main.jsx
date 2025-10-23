/**
 * Application Entry Point
 * 
 * Main entry file that renders the React application to the DOM.
 * Includes React StrictMode for development warnings and best practices.
 * 
 * Features:
 * - React 19 with createRoot API
 * - StrictMode for development checks
 * - Global CSS imports
 * - Clean application bootstrap
 * 
 * @author Manish Raj
 * @version 1.0.0
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
