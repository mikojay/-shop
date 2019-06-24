//await for window load

window.onload = () => {
	// let sidebar = document.getElementById('sidebar')
	//products
	axios.get('http://localhost:3000/api/products').then((res) => {
		//set products to api
		let products = res.data
		//target products
		let div = document.getElementById('products')


		//display each product in the dom
		products.forEach((p) => {
			div.insertAdjacentHTML('afterBegin', `
		<div class="product">
			<div class="product-image">
				<i class="far fa-star"></i>
			</div>
			<div class="category"</div>
			<div class="product-extras">
				<div class="description">
					<h4>${p.name}</h4>
					<small>${p.description}</small>
				</div>
				<div class="price">
					<span>${p.price}</span>
					<a href="#" class="button">shop now</a>
				</div>
			</div>
		</div>`
			)
		})
	})

	//productsx

	axios.get('http://localhost:3000/api/productsx').then((res) => {
		//set products to api
		let productsx = res.data
		//target products
		let div = document.getElementById('products')
		console.log('productsx', productsx);
	})

	document.addEventListener('click',(e) => {
		if(e.target.classList.contains('category')) {
			console.log(e.target.id);
			console.log('err', err);
		}
	})

	//categories
	axios.get('http://localhost:3000/api/categories').then((res) => {
	//set categories to api
		let categories = res.data
		//target categories
		// let div = document.getElementById('categories')

		let ul = document.getElementsByTagName('ul')[0]
		//create array of sidebar
		// let sidebar = document.getElementById('sidebar')

		categories.forEach((c) => {
			ul.insertAdjacentHTML('beforeEnd', `
		<li>
			<a href="#">${c.name}</a>
		</li>
		`)
		})
	})
}



// const set_name = (n) => {
// 	setTimeout(() => {
// 		let name = n;
// 		console.log('name after 3 seks', name);
// 	}, 3000)
// }
//
// set_name('Jaschi')


//create an Array
// let array = [1,2,3,4]
// create a loop where every item gets logged
// array.forEach((a) => {
// 	console.log(a);
// })
//loops starts after 5 seks
// setTimeout(() => {
//
// }, 5000)
//together
// console.log('array', array);
// setTimeout(() => {
// 	array.forEach((a) => {
// 		console.log(a);
// 	})
// }, 5000)
