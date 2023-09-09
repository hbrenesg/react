import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Se importa el store
import storeA from './redux/store';

//Conectar Redux con mi App React
import { Provider } from 'react-redux';

const store = storeA();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //Se comenta lo siguiente para que funcione el render del react router
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
