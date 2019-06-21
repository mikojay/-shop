// await for window load
window.onload = () => {

	// ::: Categories :::

	axios.get('http://localhost:3000/api/categories').then((res) => {
		// target ul inside sidebar
		let ul = document.getElementById('sidebar').getElementsByTagName('ul')[0]
		// define categies
		let categories = res.data
		// display each category in the DOM
		categories.forEach((c) => {
			ul.insertAdjacentHTML('beforeEnd', `
				<li>
					<a href="#" class="category" id="${c.id}">${c.name}</a>
				</li>
			`)
		})
	})

	// ::: Products :::

	axios.get('http://localhost:3000/api/products').then((res) => {
		console.log('res', res.data)
		let products = res.data
		// target products
		let products_ui = document.getElementById('products')

		// display each product in the DOM
		products.forEach((p) => {
			products_ui.insertAdjacentHTML('beforeEnd', `
			<div class="product">
				<div class="product-image" style="background-image: url('../img/${p.image}')">
					<i class="far fa-star"></i>
				</div>
				<div class="product-extras">
					<div class="description">
						<h4>${p.name}</h4>
						<small>${p.description}</small>
					</div>
					<div class="price">
						<span>$${p.price}</span>
						<a href="#" class="button">shop now</a>
					</div>
				</div>
			</div>
			`)
		})
	}).catch((err) => {
		console.log('err', err)
	})

	// ::: Click on Category :::

	document.addEventListener('click', (e) => {
		if (e.target.classList.contains('category')) {
			axios.get(`http://localhost:3000/api/products/${e.target.id}`).then((res) => {
				console.log('res', res.data)
				let products = res.data
				// target products
				let products_ui = document.getElementById('products')

				// clear the products
				products_ui.innerHTML = ''
				// display each product in the DOM
				products.forEach((p) => {
					products_ui.insertAdjacentHTML('beforeEnd', `
					<div class="product">
						<div class="product-image" style="background-image: url('../img/${p.image}')">
							<i class="far fa-star"></i>
						</div>
						<div class="product-extras">
							<div class="description">
								<h4>${p.name}</h4>
								<small>${p.description}</small>
							</div>
							<div class="price">
								<span>$${p.price}</span>
								<a href="#" class="button">shop now</a>
							</div>
						</div>
					</div>
					`)
				})
			}).catch((err) => {
				console.log('err', err)
			})
		}
	})

}
