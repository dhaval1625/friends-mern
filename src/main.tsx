import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.tailwind.css';
import { Toaster } from './components/ui/toaster.tsx';
import { createPortal } from 'react-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
      {createPortal(<Toaster />, document.body)}
      <App />
   </React.StrictMode>
);
