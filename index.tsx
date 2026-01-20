import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("Fatal: Could not find root element.");
} else {
  try {
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error("React Rendering Error:", error);
    rootElement.innerHTML = `<div style="padding: 20px; color: red;">渲染出错了，请刷新页面或检查网络。 Error: ${error.message}</div>`;
  }
}