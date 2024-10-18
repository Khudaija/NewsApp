import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MyNews from './Dashboard.js';
import NewsDetailCard from './IndividualNews.js';
import reportWebVitals from './reportWebVitals';
import NewsForm from './AddNews.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<MyNews />} />
        <Route path="/individual_news/:id" element={<NewsDetailCard />} />
        <Route path="/add_News" element={<NewsForm />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
