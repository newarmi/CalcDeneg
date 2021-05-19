document.querySelector('#rub').oninput = function () {
	document.querySelector('#den').value = (this.value / 333.333333333333333333333);
}
document.querySelector('#den').oninput = function () {
	document.querySelector('#rub').value = (this.value * 333.333333333333333333333);
}