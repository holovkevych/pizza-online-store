import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setCategory, setSortBy } from '../redux/actions/filters'
import { fetchPizzas } from '../redux/actions/pizzas' 
import { addPizzaToCart } from '../redux/actions/cart' 
import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components'

const categoryNames = ['Мясні', 'Вегетаріанські', 'Гриль', 'Гострі']
const sortItems = [
  { name: 'популярності', type: 'rating', order: 'desc'}, 
  { name: 'ціні', type: 'price', order: 'desc'},
  { name: 'алфавіту', type: 'name', order: 'asc'},
]

const Home = () => {

	return (
		<main className="container">
			<div className="content--top">
				<Categories />
				<SortPopup />
			</div>
		</main>
		)
}

export default Home