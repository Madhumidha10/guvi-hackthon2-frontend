import React,{useEffect,useState} from 'react'
import { getEquipments } from '../api/equipment';
import { getCategories} from '../api/category';
import Card from './Card';
import { getProductsByFilter } from '../api/filter';
const Shop = () => {
    const [text, setText] = useState('');
	const [categoryIds, setCategoryIds] = useState([]);
    const [categories,setCategories]=useState([]);
    const [equipments,setEquipments]=useState([]);


    useEffect(() => {
        getEquipments().then((res) => setEquipments(res.data.equipments));
        getCategories().then((res)=>setCategories(res.data.categories))
      }, []);
      const resetState = () => {
		setText('');
		setCategoryIds([]);
	};
    const handleCategory = e => {
		resetState();

		const currentCategoryChecked = e.target.value;
		const allCategoriesChecked = [...categoryIds];
		const indexFound = allCategoriesChecked.indexOf(currentCategoryChecked);

		let updatedCategoryIds;
		if (indexFound === -1) {
			// add
			updatedCategoryIds = [...categoryIds, currentCategoryChecked];
			setCategoryIds(updatedCategoryIds);
		} else {
			// remove
			updatedCategoryIds = [...categoryIds];
			updatedCategoryIds.splice(indexFound, 1);
			setCategoryIds(updatedCategoryIds);
		}

		
		getProductsByFilter({ type: 'category', query: updatedCategoryIds }).then(res=>setEquipments(res.data.equipments));
	
	};

      const handleSearch = e => {
		resetState();

		setText(e.target.value);

		getProductsByFilter({ type: 'text', query: e.target.value }).then(res=>setEquipments(res.data.equipments));
	};
  return (
    <section className='shop-page m-4'>
			<div className='jumbotron'>
				<h1 className='bg-light py-4'>Shop</h1>
			</div>
			<div className='row'>
				<div className='col-md-3 border-right'>
					<div className='text-muted mb-2'>
						Filters <span className='fa-solid fa-sliders-h'></span>
					</div>
					<nav className='navbar navbar-expand-lg navbar-light bg-light border-top p-3 container'>
						<form className='row '>
							<input
								className='col-sm-7 my-1  mr-2'
								type='search'
								placeholder='Search'
								aria-label='Search'
								name='search'
								value={text}
								onChange={handleSearch}
							/>
							<button
								className='btn-sm btn-outline-success col-sm-4 my-1 mx-auto' 
								type='submit'
								disabled={true}
							>
								Search
							</button>
						</form>
					</nav>

					<div className='border-top border-bottom bg-light p-3'>
						{categories &&
							categories.map(c => (
								<div key={c._id} className='form-check'>
									<input
										className='form-check-input'
										type='checkbox'
										name='category'
										value={c._id}
										id='flexCheckChecked'
										checked={categoryIds.includes(c._id)}
										onChange={handleCategory}
									/>
									<label
										className='form-check-label'
										htmlFor='flexCheckChecked'
									>
										{c.category}
									</label>
								</div>
							))}
					</div>
				</div>
				<div className='col-md-9'>
					<div className='row'>
						{equipments &&
							equipments.map(p => (
								<Card key={p._id} equipment={p} homePage={true} />
							))}
					</div>
				</div>
			</div>
		</section>
  )
}

export default Shop