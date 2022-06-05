import React from 'react';
import styled from 'styled-components';

export default class Slider extends React.PureComponent {
	state = {
		min: this.props.min,
		max: this.props.max,
		value: this.props.value,
		onchange: this.props.onchange,
		x: 0,
	}

	startX = 0;
	
	rootRef = React.createRef()

	onDragStart = (e) => {
		this.firstX = this.state.x;
		this.rootPosition = this.rootRef.current.getBoundingClientRect();

		document.body.addEventListener('mousemove',this.onDrag);
		document.body.addEventListener('mouseup',this.onDragEnd);
	}

	onDrag = (e) => {
		let x = this.firstX + (e.clientX - this.rootPosition.left) - this.startX;
		if (x < 0){
			x = 0;
		} 
		if (x > this.rootPosition.width - 10){
			x = this.rootPosition.width - 10;
		}
		this.setState({
			x: x,
		})
	}

	onDragEnd = (e) => {
		this.startX = this.state.x
		document.body.removeEventListener('mousemove',this.onDrag);
		document.body.removeEventListener('mouseup',this.onDragEnd);
	}

	render() {
		let {x} = this.state
		return (
			<Root>
				<input/>

				<Bar ref={this.rootRef}>
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

//endregion