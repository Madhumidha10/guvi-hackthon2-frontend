
import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import { useHistory } from 'react-router-dom';
const Shipping = () => {

    const history = useHistory();
    const [address, setAddress] = useState('');
	const [address2, setAddress2] = useState('');
	const [city, setCity] = useState('');
	const [state, setState] = useState('');
	const [zip, setZip] = useState('');


    const handleSubmit = evt => {
		evt.preventDefault();

		const shippingData = {
			address,
			address2,
			city,
			state,
			zip,
		};
        localStorage.setItem('shippingAddress', JSON.stringify(shippingData));
		// dispatch(saveShippingAddress(shippingData));
		history.push('/payment');
	};
  return (
    <section className='m-4'>
    <div className='jumbotron p-1'>
        <h5>
            <ProgressBar step1 />
        </h5>
    </div>

    <div className='container border py-4'>
        <div className='row justify-content-center'>
            <div className='col-md-8'>
                <h6 className='font-weight-bold mb-4'>
                    Shipping Details
                </h6>

                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='inputAddress'>Address</label>
                        <input
                            type='text'
                            className='form-control'
                            value={address}
                            onChange={evt =>
                                setAddress(evt.target.value)
                            }
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='inputAddress2'>Address 2</label>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Apartment number, suite, unit, etc'
                            value={address2}
                            onChange={evt =>
                                setAddress2(evt.target.value)
                            }
                        />
                    </div>

                    <div className='form-row'>
                        <div className='form-group col-md-6'>
                            <label htmlFor='inputCity'>City</label>
                            <input
                                type='text'
                                className='form-control'
                                value={city}
                                onChange={evt =>
                                    setCity(evt.target.value)
                                }
                            />
                        </div>
                        <div className='form-group col-md-4'>
                            <label htmlFor='inputState'>State</label>
                            <select
                                className='form-control'
                                value={state}
                                onChange={evt =>
                                    setState(evt.target.value)
                                }
                            >
                                <option>Choose...</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Hosur">Hosur</option>
                                <option value="Madurai">Madurai</option>
                                <option value="Pondy">Pondy</option>
                                {/* {usaStates.map(s => (
                                    <option
                                        key={s.abbreviation}
                                        value={s.abbreviation}
                                    >
                                        {s.name}
                                    </option>
                                ))} */}
                            </select>
                        </div>
                        <div className='form-group col-md-2'>
                            <label htmlFor='inputZip'>Zip</label>
                            <input
                                type='text'
                                className='form-control'
                                value={zip}
                                onChange={evt =>
                                    setZip(evt.target.value)
                                }
                            />
                        </div>
                    </div>

                    <button type='submit' className='btn btn-primary'>
                        Continue
                    </button>
                </form>
            </div>
        </div>
    </div>
</section>
  )
}

export default Shipping