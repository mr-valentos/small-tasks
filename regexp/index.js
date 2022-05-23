const ukrAlp = /[^А-ЩЬЮЯҐЄІЇа-щьюяґєії]/
const email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const passwordCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/
// const ukrRe = /[^В]/

document.querySelector('#user-form').addEventListener('submit', function (e) {
	e.preventDefault();

	let name = document.querySelector('[name="full_name"]')
	let mail = document.querySelector('[name="email"]')
	let password = document.querySelector('[name="password"]')
	console.log(mail.value.match(email))
	
	if (name.value.match(ukrAlp)){
		name.style.background = '#F9D0C4'
	} else{
		name.style.background = '#C2E0C6'
	}
	if (mail.value.match(email)){
		mail.style.background = '#C2E0C6'
	} else{
		mail.style.background = '#F9D0C4'
	}
	if (password.value.match(passwordCheck)){
		password.style.background = '#C2E0C6'
	} else{
		password.style.background = '#F9D0C4'
	}

});

document.querySelectorAll('[data-show]').forEach(function (button) {
	button.addEventListener('click', function (e) {
		document.querySelector('#description').classList.add('d-none');
		document.querySelector('#preview').classList.add('d-none');

		document.querySelector('#' + e.currentTarget.getAttribute('data-show')).classList.remove('d-none');
	});
});