$(function () {

	$('.header__burger').click(function (event) {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

});

document.addEventListener("DOMContentLoaded", function (event) {

	let outSearch = (myTarget, myWrap) => {
		let target = document.querySelector(myTarget);
		let wrap = document.querySelector(myWrap);

		console.log(target)
		console.log(wrap)

		target.addEventListener('click', (e) => {
			if (e.target.classList.contains('fa-search') && e.target.parentNode.classList.contains(myTarget.replace(/\D/, "")) || e.target.parentNode.classList.contains('fa-search')) {
				if (wrap.classList.contains('vis')) {
					wrap.style.opacity = "1";
					wrap.style.visibility = "visible";
					wrap.classList.remove('vis');
				} else {
					wrap.style.opacity = "0";
					wrap.style.visibility = "hidden";
					wrap.classList.add('vis');
				}

			}
		});

	}

	outSearch('.header__seacr', '.search__form');
	outSearch('.header__seacr-small', '.search__form-small');




});