import React from 'react';
import ReactDOM from 'react-dom/client';

import './Style/index.css';

import HomePage from './Pages/HomePage';
import Layout from './PageComponents/Layout'

import { BrowserRouter, Routes, Route } from "react-router-dom";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}