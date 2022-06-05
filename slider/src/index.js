import React from 'react';
import ReactDom from 'react-dom/client';
import Slider from './Slider';
import DoubleSlider from './DoubleSlider';

ReactDom.createRoot(document.querySelector('#slider')).render(
	<Slider
		min={100}
		max={2000}
		value={1500}
		onChange={(value) => console.log(value)}
	/>
);


ReactDom.createRoot(document.querySelector('#double-slider')).render(
	<DoubleSlider
		min={100}
		max={2000}
		startValue={900}
		endValue={1800}
		onChange={(startValue, endValue) => console.log(startValue, endValue)}
	/>,
);