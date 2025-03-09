import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './globals.css';
import './sanitize.css';
import './index.css';
import App from './components/App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
