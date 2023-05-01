import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
// import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>  
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

//  import React from 'react';
// import { createRoot } from 'react-dom';
// import App from './App';
// import './index.css';
// import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { store } from './store'; 

// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>  
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </BrowserRouter>
// );

// ReactDOM.render(
//   <BrowserRouter>  
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </BrowserRouter>,
//   document.getElementById('root')
// );

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// // import * as ReactDOMClient from 'react-dom/client';
// import './index.css';
// import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { store }  from ''


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <BrowserRouter>  
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </BrowserRouter>
// )
// const container = document.getElementById('root');
// // Create a root.
// const root = ReactDOMClient.createRoot(container);

// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </BrowserRouter>
//   </React.StrictMode>
// );
