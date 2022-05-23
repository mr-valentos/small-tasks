let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

jQuery('input').on('paste', function (e) {
	e.preventDefault();

	var text = e.originalEvent.clipboardData.getData('text/plain');
	var input = e.currentTarget;

	let	bigArrey = text.split(/\n/)
	let mainArrey = bigArrey.map((elem) => elem.split(/;/))

	let tBody = $('tbody > tr');
	let currRow = +input.getAttribute('name').slice(1)
	let currLet = input.getAttribute('name').slice(0, 1)
	let currCol = arr_en.indexOf(currLet)+1

	let arrRowLen = mainArrey.length - 1
	let bodyRowLen = tBody.length
	
	if (bodyRowLen - currRow < arrRowLen){
		for (i = 0; i < arrRowLen - (bodyRowLen - currRow); i++){
			let rowNumber = bodyRowLen + (i + 1)
			$('tbody').append(`
			<tr>
			<th>${rowNumber}</th>
			<td><input type="text" name="a${rowNumber}" value=""/></td> 
			<td><input type="text" name="b${rowNumber}" value=""/></td>
		</tr>`)
		}
	}

	let arrColLen = mainArrey[0].length
	let bodyColLen = $('tbody > tr')[0].children.length

	if (bodyColLen - currCol < arrColLen){
		newCollum ()
	}

	function newCollum (){
		for (i = 0; i < arrColLen - (bodyColLen - currCol); i++){
			let collLeter = arr_en[(bodyColLen - 1) + i]
			$('thead > tr').append(`<th>${collLeter.toUpperCase()}</th>`)
			$('tbody > tr').each(function(){
				let positionNumber = +$(this).first().text()
				$(this).append(`
				<td><input type="text" name="${collLeter}${positionNumber}" value=""/></td>
			`)		
			})
		}
		pasteValue()
	}

	function pasteValue () {
		let thisCurrRow = currRow - 1;
		
		for (let item in mainArrey){
			let pastePosition = $('tbody > tr')[thisCurrRow++]
			pasteValue2(item, pastePosition)
		}
		function pasteValue2 (item, pastePosition){
			let thisCurrColl = currCol - 1
			for (let i = 0; i < mainArrey[item].length; i++){
				let collCounter = thisCurrColl++
				let inputs = $(pastePosition).find('input')[collCounter]
				inputs.value = mainArrey[item][i]
			}
		}
	}
	
	
	
	
	
	// console.log(tBody.indexOf(pohyi))
	
	// for (let j = 0; j < mainArrey.length; j++){

	// 	for (let i=0; i<mainArrey[j].length; i++){
	// 		input.value = mainArrey[j][i];
	// 	}
	// }
	
	console.log(mainArrey)
	console.log(arrRowLen)
	// console.log($('tbody > tr')[currRow])
});




// console.log(tBody[0])









var currentColumn;

jQuery('thead th').on('contextmenu', function (e) {
	e.preventDefault();

	currentColumn = e.currentTarget;

	var menu = jQuery('#column-menu');

	menu.addClass('d-block');

	menu.css({
		left: e.clientX,
		top: e.clientY
	});
});

jQuery('#column-menu [data-action]').on('click', function (e) {
	e.preventDefault();

	var action = e.currentTarget.getAttribute('data-action');

	switch (action) {
		case 'add-left':

			break;

		case 'add-right':

			break;

		case 'remove':

			break;
	}

	jQuery('#column-menu').removeClass('d-block');
});