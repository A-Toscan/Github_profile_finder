addEventListener('DOMContentLoaded', () => {

	const imagenes = ['img/pic1.jpg', 'img/pic2.jpg', 'img/pic3.jpg', 'img/pic4.jpg']

	let i = 1
	const img1 = document.querySelector('#img1')
	const img2 = document.querySelector('#img2')
	const progressBar = document.querySelector('#progress-bar')
	const divIndicatores = document.querySelector('#indicatores')
	let percentage_base = 100 / imagenes.length
	let percentage_actual = percentage_base

	for (let index = 0; index < imagenes.length; index++) {
		const div = document.createElement('div')
		div.classList.add('circles')
		div.id = index
		divIndicatores.appendChild(div)
	}

	progressBar.style.width = `${percentage_base}%`
	img1.src = imagenes[0]
	const circulos = document.querySelectorAll('.circles')
	circulos[0].classList.add('resaltado')

	const slideshow = () => {
		img2.src = imagenes[i]
		const circulo_actual = Array.from(circulos).find(el => el.id == i)
		Array.from(circulos).forEach(cir => cir.classList.remove('resaltado'))
		circulo_actual.classList.add('resaltado')

		img2.classList.add('active')
		i++
		percentage_actual += percentage_base
		progressBar.style.width = `${percentage_actual}%`

		if (i == imagenes.length) {
			i = 0
			percentage_actual = percentage_base - percentage_base
		}

		setTimeout(() => {
			img1.src = img2.src
			img2.classList.remove('active')
		}, 1000)
	}

	setInterval(slideshow, 3000)

})