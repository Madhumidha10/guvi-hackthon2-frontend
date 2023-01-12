import React from 'react';
import ProgressBar from './ProgressBar';
import { newOrder } from '../api/order';
import { getEquipments } from '../api/equipment';
// const __DEV__=document.domain==="localhost"
const Payment = () => {
	
  const handleOrder=()=>{
	
    // let data={amount:getCart().reduce(
    //   (currentSum, currentCartItem) =>
    //     currentSum +
    //     currentCartItem.count * currentCartItem.equipmentPrice*noOfDays(new Date(currentCartItem.startDate),new Date(currentCartItem.endDate)),
    //   0
    // )
    // .toFixed(2)}
    
    // newOrder(data)
  
  }
function loadScript(src){
	return new Promise((reslove)=>{
		const script=document.createElement('script')
		script.src=src
		script.onload=()=>{
			reslove(true)
		}
		script.onerror=()=>{
			reslove(false)
		}
		document.body.appendChild(script)
	})
}


async function handlePayment(e){
	e.preventDefault();
	const cart = localStorage.getItem("cart")
	? JSON.parse(localStorage.getItem("cart"))
	: [];
	const amount=cart
		.reduce(
		  (currentSum, currentCartItem) =>
			currentSum +
			currentCartItem.count * currentCartItem.equipmentPrice*noOfDays(new Date(currentCartItem.startDate),new Date(currentCartItem.endDate)),
		  0
		)
		.toFixed(2)
	newOrder({amount:amount}).then((res)=>{displayRaszorPay(res.data)})

  }
  const noOfDays=(startDate,endDate)=>{
    let difference = endDate.getTime()-startDate.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
       return TotalDays;
  }
  async function displayRaszorPay(order)
  {

	const res=await loadScript("https://checkout.razorpay.com/v1/checkout.js")  
console.log(order)
if (!res){
alert('Razorpay SDK failed to load.ARE you online?')
return 
}
const options = {
	key: "rzp_test_wouuRdpJGvJnzs", // Enter the Key ID generated from the Dashboard
	amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise or INR 500.
	currency: order.currency,
	name: "AVM Rental",
	description: "Rental amount",
	image: "https://th.bing.com/th/id/OIP.8XTQs1wcoZJZ9iy3opIs_AHaFj?pid=ImgDet&rs=1",
	order_id: order.id,//This is a sample Order ID. Create an Order using Orders API. (https://razorpay.com/docs/payment-gateway/orders/integration/#step-1-create-an-order). Refer the Checkout form table given below
	handler: function (response){
		alert(response.razorpay_payment_id);
		alert(response.razorpay_order_id);
		alert(response.razorpay_signature);

	},
	// prefill: {
	// 	"name": "Gaurav Kumar",
	// 	"email": "gaurav.kumar@example.com",
	// 	"contact": "9999999999"
	// },
	notes: {
		"address": "note value"
	},
	theme: {
		"color": "#EA5B29"
	}
};

const paymentObject=new window.Razorpay(options)
paymentObject.open()
  }
	return (
		<section className='m-4'>
			<div className='jumbotron p-1'>
				<h5>
					<ProgressBar step1 step2 />
				</h5>
			</div>

			<div className='container border border py-4'>
				<div className='row justify-content-center'>
					<div className='col-md-8'>
						<h6 className='font-weight-bold mb-4'>Payment</h6>

						<form>
							<div className='form-check'>
								<input
									className='form-check-input'
									type='radio'
									name='paymentMethod'
									value='Razorpay'
								/>
								<label className='form-check-label'>
                Razorpay
								</label>
							</div>
							{/* <div className='form-check'>
								<input
									className='form-check-input'
									type='radio'
									name='paymentMethod'
									value='stripe'
								/>
								<label className='form-check-label'>
									Stripe
								</label>
							</div> */}
							<button className='btn btn-primary mt-3' onClick={(e)=>handlePayment(e)}>
								Continue
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Payment;