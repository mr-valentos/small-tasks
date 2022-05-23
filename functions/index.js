



document.querySelectorAll('input[name], #formula, #condition').forEach(function (input) {
	input.addEventListener('keyup', function () {
		var data = {};

		document.querySelectorAll('input[name]').forEach(function (input) {
			data[input.name] = Number(input.value);
		});

		var formula = document.querySelector('#formula');
		var result = document.querySelector('#result');
		var condition = document.querySelector('#condition');
		
		try {
			var calculator = new Function('cells', 'with (cells) { return ' + formula.value + ';}');
			var check = new Function('cells', 'with (cells) { return ' + condition.value + ';}');
			var resultCheck = check(data);
			result.value = calculator(data);
		}
		catch (error) {
			result.value = '#ERROR';
			console.error('check coligraf');
		}
		
		
		console.log(resultCheck);
		if (resultCheck) {
			result.style.backgroundColor = 'green';
		} else {
			result.style.backgroundColor = 'white';
		}
		
	
		

	});
});