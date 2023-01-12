import React,{useState,useEffect,Fragment} from 'react'
import {  getEquipment, updateEquipment } from '../api/equipment';
import { Link } from 'react-router-dom';
import { getCategories } from '../api/category';

const AdminEditEquipment = ({ match, history }) => {
    const id = match.params.id;
    /****************************
	 * COMPONENT STATE PROPERTIES
	 ***************************/
	const [equipmentImage, setEquipmentImage] = useState(null);
	const [equipmentName, setEquipmentName] = useState('');
	const [equipmentDesc, setEquipmentDesc] = useState('');
	const [equipmentPrice, setEquipmentPrice] = useState('');
	const [equipmentCategory, setEquipmentCategory] = useState('');
	const [equipmentQty, setEquipmentQty] = useState('');
    const [categories,setCategories]=useState(null)
    


	

	const loadCategories = async () => {
		await getCategories()
		  .then((res) => {
			console.log(res)
			setCategories(res.data.categories);
		  })
	  };
	
	  const loadEquipment = async () => {
		await getEquipment(id).then((Equipment)=>{
			console.log(Equipment.data)
			setEquipmentImage(Equipment.data.fileName);
			setEquipmentName(Equipment.data.equipmentName);
			setEquipmentDesc(Equipment.data.equipmentDesc);
			setEquipmentPrice(Equipment.data.equipmentPrice);
			setEquipmentCategory(Equipment.data.equipmentCategory);
			setEquipmentQty(Equipment.data.equipmentQty);
		
		})
	
		
	
	  };
	
	  useEffect(() => {
		loadCategories();
		loadEquipment();
	  }, []);
  // ****************************
	//  * EVENT HANDLERS
	//  ***************************/
	const handleImageUpload = (e) => {
		const image = e.target.files[0];
		setEquipmentImage(image);
	};

	const handleEquipmentSubmit = async (e) => {
		e.preventDefault();

		let formData = new FormData();
		formData.append('equipmentImage', equipmentImage);
		formData.append('equipmentName', equipmentName);
		formData.append('equipmentDesc', equipmentDesc);
		formData.append('equipmentPrice', equipmentPrice);
		formData.append('equipmentCategory', equipmentCategory);
		formData.append('equipmentQty', equipmentQty);

		  updateEquipment(id,formData).then(res => {
				history.push('/admin/dashboard');
			})
			.catch(err => {
				console.log(err);
			});
	};
  return (

    <div className='container my-3'>
				<div className='row'>
					<div className='col-md-8 mx-auto'>
						<Link to='/admin/dashboard'>
							<span className='fas fa-arrow-left'>Go Back</span>
						</Link>
						<div>
							<br />
							<div className='modal-content'>
								<form onSubmit={handleEquipmentSubmit}>
									<div className='modal-header bg-warning text-white'>
										<h5 className='modal-title'>
											Update Equipment
										</h5>
									</div>
									<div className='modal-body my-2'>
										<Fragment>
											<label className='btn btn-dark mr-4'>
												Choose file
												<input
													type='file'
													name='equipmentImage'
													accept='images/*'
													hidden
													onChange={handleImageUpload}
												/>
											</label>
											{equipmentImage &&
											equipmentImage.name ? (
												<span className='badge badge-secondary'>
													{equipmentImage.name}
												</span>
											) : equipmentImage ? (
												<img
													className='img-thumbnail'
													style={{
														width: '120px',
														height: '80px',
													}}
													src={`/uploads/${equipmentImage}`}
													alt='equipment'
												/>
											) : null}

											<div className='form-group'>
												<label className='text-secondary'>
													Name
												</label>
												<input
													type='text'
													className='form-control'
													name='equipmentName'
													value={equipmentName}
													onChange={e =>
														setEquipmentName(
															e.target.value
														)
													}
												/>
											</div>
											<div className='form-group'>
												<label className='text-secondary'>
													Description
												</label>
												<textarea
													className='form-control'
													rows='3'
													name='equipmentDesc'
													value={equipmentDesc}
													onChange={e =>
														setEquipmentDesc(
															e.target.value
														)
													}
												></textarea>
											</div>
											<div className='form-group'>
												<label className='text-secondary'>
													Price
												</label>
												<input
													type='text'
													className='form-control'
													name='equipmentPrice'
													value={equipmentPrice}
													onChange={e =>
														setEquipmentPrice(
															e.target.value
														)
													}
												/>
											</div>
											<div className='form-row'>
												<div className='form-group col-md-6'>
													<label className='text-secondary'>
														Category
													</label>
													<select
														className='custom-select mr-sm-2'
														name='equipmentCategory'
														value={equipmentCategory}
														onChange={e =>
															setEquipmentCategory(
																e.target.value
															)
														}
													>
														<option value=''>
															Choose one...
														</option>
														{categories &&
															categories.map(
																c => (
																	<option
																		key={
																			c._id
																		}
																		value={
																			c._id
																		}
																	>
																		{
																			c.category
																		}
																	</option>
																)
															)}
													</select>
												</div>

												<div className='form-group col-md-6'>
													<label className='text-secondary'>
														Quantity
													</label>
													<input
														type='number'
														className='form-control'
														min='0'
														max='1000'
														name='equipmentQty'
														value={equipmentQty}
														onChange={e =>
															setEquipmentQty(
																e.target.value
															)
														}
													/>
												</div>
											</div>
										</Fragment>
									</div>
									<div className='modal-footer'>
										<button
											type='submit'
											className='btn btn-warning text-white'
										>
											Submit
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
  )
}

export default AdminEditEquipment