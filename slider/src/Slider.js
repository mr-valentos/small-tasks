import React from 'react';
import styled from 'styled-components';

export default class Slider extends React.PureComponent {
	state = {
		min: this.props.min,
		max: this.props.max,
		value: this.props.value,
		onChange: this.props.onchange,
		x: 0,
		line: 0,
	}

	changeValue = this.changeValue.bind(this);

	startX = 0;
	
	rootRef = React.createRef();

	
	componentDidMount(){
		this.changeValue()
	}

	changeValue(event) {
		let min = this.state.min;
		let max = this.state.max;
		let value = this.state.value;;
		if (event){
			value = event.target.value;
		}

		this.rootPosition = this.rootRef.current.getBoundingClientRect();

		let width = this.rootPosition.width - 10;
		let proc = (value - min)/(max - min) * 100;
		let xValue = (width) * proc / 100

		if (xValue < 0){
			xValue = 0;
			
		} 
		if (xValue > width){
			xValue = width;
		}

		this.setState({
			x: xValue,
			value: value,
			line: xValue,
		})
		
		this.startX = xValue;
	}
		
	onDragStart = (e) => {
		this.firstX = this.state.x;
		this.rootPosition = this.rootRef.current.getBoundingClientRect();

		document.body.addEventListener('mousemove',this.onDrag);
		document.body.addEventListener('mouseup',this.onDragEnd);
	}

	onDrag = (e) => {
		let width = this.rootPosition.width - 10;
		let value = this.state.value;

		let x = this.firstX + (e.clientX - this.rootPosition.left) - this.startX;
		let proc = (x / width) * 100;
		value = Math.trunc(((this.state.max - this.state.min) * proc / 100) + this.state.min)

		if (x < 0){
			x = 0;
			value = this.state.min;
		} 
		if (x > width){
			x = width;
			value = this.state.max;
		}
		this.setState({
			x: x,
			value: value,
			line: x,
		})
	}

	

	onDragEnd = (e) => {
		this.startX = this.state.x
		document.body.removeEventListener('mousemove',this.onDrag);
		document.body.removeEventListener('mouseup',this.onDragEnd);
	}

	render() {
		let {x, line} = this.state
		return (
			<Root>
				<input value={this.state.value} onChange={this.changeValue}/>
				
				<Bar ref={this.rootRef}>
					<Line 
						width={line}
					/>
					<Handler				
						x={x}
						onMouseDown={this.onDragStart}
					/>
				</Bar>
			</Root>
		);
	}
}


//region ====================== Styles ========================================

const Root = styled.div`
    padding: 10px 0;
`;

const Bar = styled.div`
    
	height: 2px;
	background-color: black;
	margin-top: 10px;
`;

const Handler = styled.div.attrs(props => ({
	style: {
		left: props.x
	}
}))`
    position: relative;
	height: 10px;
	width: 10px;
	border-radius: 5px;
	background-color: red;
	top: -4px;
	
`;

const Line = styled.div.attrs(props => ({
	style: {
		width: props.width
	}
}))`
    position: absolute;
	height: 2px;
	background-color: red;
	box-shadow: 0px 0px 3px red;
	
`;
//endregion