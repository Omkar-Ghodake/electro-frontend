import React from 'react'
import { Link } from 'react-router-dom'
import ReactStars from 'react-rating-stars-component'

const FeatProdItem = (props) => {

	const { title, img, text } = props

	const reactStartsOptions = {
		edit: false,
		size: window.innerWidth < 600 ? 20 : 23,
		isHalf: true
	}

	return (
		<>
			<div className="feat-product-card col-lg-3 col-md-4 col-sm-6">
				<div className="card box-shadow-main rounded-3">
					<Link to='/'>
						<div className="card-img-top">
							<img src={img} alt="Product" className='w-100' />
						</div>
						<div className="card-body">
							<div className="card-title">
								{title}
							</div>
							<div className="card-text">
								{text}
							</div>
						</div>
					</Link>
					<div className="card-footer">
						<ReactStars {...reactStartsOptions} />
					</div>
				</div>
			</div>
		</>
	)
}

export default FeatProdItem