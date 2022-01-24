import React from 'react'

//import

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