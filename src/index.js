import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Homepage from './Project/Homepage.js';
import { BrowserRouter } from 'react-router-dom';

import cartReducer from './Project/Components/reducers/cartReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(cartReducer);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Homepage />
		</BrowserRouter>
	</Provider>
	, document.getElementById('root')
);

// ReactDOM.render(
//   <BrowserRouter>
//     <Homepage />
//   </BrowserRouter>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
