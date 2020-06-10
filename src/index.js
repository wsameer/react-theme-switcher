import React from 'react';
import ReactDOM from 'react-dom';
import './i18n';
import App from './App';
import { ThemeContextProvider } from "./providers/ThemeContextProvider";

ReactDOM.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>,
  document.getElementById('root')
);
