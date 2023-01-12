

export const setLocalStorage=(key,value)=>{
    localStorage.setItem(key,JSON.stringify(value))
}

export const getLocalStorage=(key)=>{
   return JSON.parse(localStorage.getItem(key))
}
export const deleteLocalStorage=(key)=>{
    localStorage.removeItem(key)
 }

 export const addToCart =async(equipment) => {
	// if cart already exists in local storage, use it, otherwise set to empty array
	const cart = localStorage.getItem('cart')
		? JSON.parse(localStorage.getItem('cart'))
		: [];

	// check if duplicates
	const duplicates = cart.filter(cartItem => cartItem._id === equipment._id);

	// if no duplicates, proceed
	if (duplicates.length === 0) {
		// prep equipment data
		const equipmentToAdd = {
			...equipment,
			count: 1,
		};

		// add equipment data to cart
		cart.push(equipmentToAdd);

		// add cart to local storage
		localStorage.setItem('cart', JSON.stringify(cart));

	    
	}
};





export const deleteFromCart = async (equipment) => {
	const cart = localStorage.getItem('cart')
		? JSON.parse(localStorage.getItem('cart'))
		: [];

	const updatedCart = cart.filter(cartItem => cartItem._id !== equipment._id);

	localStorage.setItem('cart', JSON.stringify(updatedCart));


};

export const getCart=()=>{
    const cart=localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : []
    return cart
}