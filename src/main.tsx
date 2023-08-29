// import './index.css'
import '@styles/global.scss';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';

createRoot(document.getElementById('root') as HTMLInputElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
