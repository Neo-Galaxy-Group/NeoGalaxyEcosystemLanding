import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import ExternalRedirect from './components/ExternalRedirect';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

createRoot(rootElement).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/academy" element={<ExternalRedirect to="https://academy.neogalaxy.net" />} />
          <Route path="/community" element={<ExternalRedirect to="https://community.neogalaxy.net" />} />
          <Route path="/ngsh" element={<ExternalRedirect to="https://ngsh.neogalaxy.net" />} />
          <Route path="*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
