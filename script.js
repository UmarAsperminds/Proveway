document.querySelectorAll('.OfferOptionsDiv').forEach((elem) => {
	console.log(elem)
    elem.addEventListener("click", function(event) {
		let ActiveElement = document.querySelector('.ActiveRadioCard');
		if(ActiveElement){
			ActiveElement.classList.remove('ActiveRadioCard', 'RadioCardWithSpecification')
			ActiveElement.classList.add('RadioCard')
		}
		elem.children[2].children[0].children[0].checked = true
		document.querySelector('.ExternalCard').style.height = "570px"
		let OfferDiv = elem.closest('.OfferOptionsDiv')
		OfferDiv.classList.add('ActiveRadioCard', 'RadioCardWithSpecification')
		OfferDiv.classList.remove('RadioCard')
    });
});