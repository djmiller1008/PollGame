import React from 'react';
import ReactDOM from 'react-dom';
import Display from './components/display';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    ReactDOM.render(<Display />, root);
});