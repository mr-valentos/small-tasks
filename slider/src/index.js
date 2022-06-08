import React from 'react';
import ReactDom from 'react-dom/client';
import Slider from './Slider';

ReactDom.createRoot(document.querySelector('#slider')).render(
	<Slider
		min={100}
		max={2000}
		value={1500}
		onChange={(value) => console.log(value)}
	/>
);
