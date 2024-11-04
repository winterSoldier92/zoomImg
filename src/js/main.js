const main = document.querySelector('.main-img')
const imgList = document.querySelector('.img-list')

let mainImg
let newImg
let boxImg

const zoomImg = e => {
	const x = e.clientX
	const y = e.clientY

	const imgX = main.offsetLeft
	const imgY = main.offsetTop

	const newX = (imgX - x) * -1
	const newY = (imgY - y) * -1

	main.style.transformOrigin = `${newX}px ${newY}px`
	main.classList.add('zoom-img')
}

const resetImg = () => {
	main.classList.remove('zoom-img')
}

const changeImg = e => {
	mainImg = main.getAttribute('src')
	boxImg = e.target.getAttribute('src')
	if (e.target.matches('.gallery-img')) {
		main.setAttribute('src', boxImg)
	}

	deleteImg(e)
	addImg(e)
}
const deleteImg = e => {
	
	if (e.target.matches('.gallery-img')) {
		e.target.remove()
	}
}
const addImg = e => {
	if (e.target.matches('.gallery-img')) {
		newImg = document.createElement('img')
		newImg.classList.add('gallery-img')
		newImg.setAttribute('src', mainImg)
		newImg.setAttribute('alt', 'obrazek')
		
		imgList.append(newImg)
	}
}

imgList.addEventListener('click', changeImg)

main.addEventListener('mousemove',zoomImg)
main.addEventListener('mouseout',resetImg)

