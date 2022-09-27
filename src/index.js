import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';

// Renders the root react component
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

// Accept hot loading to reload when there are changes in code
module.hot.accept();
