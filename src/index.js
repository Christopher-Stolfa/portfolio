import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Renders the root react component
ReactDOM.render(<App />, document.getElementById('root'));

// Accept hot loading to reload when there are changes in code
module.hot.accept();
