import React,{useContext,useState} from 'react';
import { Link} from 'react-router-dom';
import { CartContext } from './App';
import { addToCart, getCart } from './helpers/localStorage';


const Card = ({equipment,deleteButton,homePage,adminPage}) => {
	const {cart,setCart}=useContext(CartContext)

	const handleAddToCart = () => {
		addToCart(equipment); 
		setCart(getCart())
	};
	
  return (
    <div className='col-sm-4 my-3'>
			<div className='card h-100' >
				<a href='#!'>
					<img
						className='img-fluid'
						src={`/uploads/${equipment.fileName}`}
						alt='equipment'
					/>
				</a>

				<div className='card-body text-center h-50'>
					<h5>{equipment.equipmentName}</h5>
					<hr />
					<h6 className='mb-3'>
						<span className='text-secondary mr-2'>
							{equipment.equipmentPrice.toLocaleString('en-US', {
								style: 'currency',
								currency: 'INR',
							})}
						</span>
					</h6>
					<p className='text-muted'>
						{equipment.equipmentQty <= 0 ? 'Out of Stock' : 'In Stock'}
					</p>
					<p>
						{equipment.equipmentDesc.length > 60
							? equipment.equipmentDesc.substring(0, 60) + '...'
							: equipment.equipmentDesc.substring(0, 60)}
					</p>
					{adminPage && (
						<>
							<Link
								to={`/admin/edit/equipment/${equipment._id}`}
								type='button'
								className='btn btn-secondary btn-sm mr-1 my-1'
							>
								<i className='far fa-edit pr-1'></i>
								Edit
							</Link>
							{deleteButton}
						</>
					)}

					{homePage && (
						<>
							<Link
								to={`/equipment/${equipment._id}`}
								type='button'
								className='btn btn-primary btn-sm mr-1 my-1'
							>
								View equipment
							</Link>
							<button
								type='button'
								className='btn btn-warning btn-sm'
								disabled={equipment.equipmentQty <= 0}
								onClick={handleAddToCart}
							>
								Add to Cart
							</button>
						</>
				 )} 
				</div>
			</div>
		</div>
  )
}

export default Card