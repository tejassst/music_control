import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  return <h1>Testing React code</h1>;
}

const appDiv = document.getElementById('app');
const root = createRoot(appDiv);
root.render(<App />);

export default App;
