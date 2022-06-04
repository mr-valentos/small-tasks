import React from 'react';
import ReactDom from 'react-dom';
import UserForm from './UserForm';
import SomeContext from './Context';

const user = {
	name: 'Тарас Григорович Шевченко',
	email: 'taras@mail.com',
	password: 'Taras123',
	admin: false,
	phones: [
		{number: '651122', type: 'home'},
		{number: '651d122', type: 'home'},
		{number: '0123456789', type: 'mobile'},
		{number: '380123456789', type: 'mobile'},
	],
};

ReactDom.render(
	<SomeContext.Provider value={user.admin}>
		<UserForm
		user={user}
	/>
	</SomeContext.Provider>
	,
	document.querySelector('#root')
);