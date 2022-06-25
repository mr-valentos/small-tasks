import React from 'react';
import ReactDom from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import store from './store'
import './css/index.css'
import './css/base.css'
import ToDo from './ToDo'


ReactDom.createRoot(document.querySelector('.todoapp')).render(
	<Provider store={store}>
		<BrowserRouter>
			<ToDo/>
		</BrowserRouter>		
	</Provider>
);
