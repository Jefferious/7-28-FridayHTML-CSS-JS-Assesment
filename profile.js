const clickFavColor = (event) => {
	event.preventDefault()
	alert('My favorite color is blue!')
}

let colorClick = document.querySelector('#color')
colorClick.addEventListener('click', clickFavColor)

const clickPlace = (event) => {
	event.preventDefault()
	alert('My favorite place in the world is wherever my wife and son are!')
}

let placeClick = document.querySelector('#place')
placeClick.addEventListener('click', clickPlace)

const clickRitual = (event) => {
	event.preventDefault()
	alert('My favorite ritual is worshiping God by partaking the sacrament on Sundays')
}

let ritualClick = document.querySelector('#ritual')
ritualClick.addEventListener('click', clickRitual)

