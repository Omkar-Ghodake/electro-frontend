import React from 'react'
import '../css/FeaturedProducts.css'
import FeatProdItem from './FeatProdItem.jsx'
import Img1 from '../assets/images/feat-products/feat-prod-img1.jpg'

const tempProdData = [
	{
		'title': 'product 1',
		'img': Img1,
		'text': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iste ut quam!',
	},
	{
		'title': 'product 2',
		'img': Img1,
		'text': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iste ut quam!',
	},
	{
		'title': 'product 3',
		'img': Img1,
		'text': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iste ut quam!',
	},
	{
		'title': 'product 4',
		'img': Img1,
		'text': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iste ut quam!',
	},
	{
		'title': 'product 5',
		'img': Img1,
		'text': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iste ut quam!',
	},
	{
		'title': 'product 6',
		'img': Img1,
		'text': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iste ut quam!',
	},
	{
		'title': 'product 7',
		'img': Img1,
		'text': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iste ut quam!',
	},
]

const FeaturedProducts = () => {
	return (
		<>
			<div className="FeaturedProducts container my-5">
				<h4 className='text-center feat-prod-head mx-auto p-3 px-5'>Featured Products</h4>
				<div className="row g-4 mt-4">
					{
						tempProdData.map((product, index) => {
							return <
								FeatProdItem
								key={index}
								title={product.title}
								img={product.img}
								text={product.text}
							/>
						})
					}
				</div>
			</div>
		</>
	)
}

export default FeaturedProducts