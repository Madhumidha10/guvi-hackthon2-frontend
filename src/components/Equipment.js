import React,{useEffect,useState,useContext} from 'react'
import { getEquipment } from '../api/equipment';
import { CartContext } from './App';
import { addToCart, getCart } from './helpers/localStorage';

const Equipment = ({ match, history }) => {
    const { id } = match.params;
    const [equipment,setEquipment]=useState(null)
    const {cart,setCart}=useContext(CartContext)
  
    useEffect(()=>{
        getEquipment(id).then(res=>setEquipment(res.data))
    },[])
    const handleAddToCart = () => {
		addToCart(equipment);
        setCart(getCart());
	};

	const handleGoBackBtn = () => {
		history.goBack();
	};
  return (
    <section className='equipment-page m-4'>
    <button
        to='/shop'
        className='btn btn-light text-primary mb-4'
        onClick={handleGoBackBtn}
    >
        Go Back
    </button>
    {equipment && (
        <div className='row'>
            <div className='col-md-6'>
                <img
                    className='img-fluid w-100 mb-4'
                    src={`/uploads/${equipment.fileName}`}
                    alt='equipment'
                />
            </div>
            <div className='col-md-5'>
                <h3 className='mb-4'>{equipment.equipmentName}</h3>
                <p className='text-muted border-top py-2'>
                    Price:{' '}
                    {equipment.equipmentPrice.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'INR',
                    })}
                </p>
                <p className='text-muted border-top py-2'>
                    Status:{' '}
                    {equipment.equipmentQty <= 0
                        ? 'Out of Stock'
                        : 'In Stock'}
                </p>
                <p className='text-muted border-top py-2'>
                    Description: {equipment.equipmentDesc}
                </p>
                <button
                    className='btn btn-dark btn-large btn-block mb-5 py-2'
                    disabled={equipment.equipmentQty <= 0}
                    onClick={handleAddToCart}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    )}
</section>
  )
}

export default Equipment