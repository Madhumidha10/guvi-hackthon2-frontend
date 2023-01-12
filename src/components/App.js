import React,{createContext,useState} from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import SignIn from './SignIn'
import SignUp from './SignUp'
import NotFound from './NotFound'
import './App.css'
import AdminDashboard from './AdminDashboard'
import UserDashboard from './UserDashboard'
import AdminEditEquipment from './AdminEditEquipment'

import Shop from './Shop'
import Equipment from './Equipment'
import Cart from './Cart'
import Shipping from './Shipping'
import { getCart } from './helpers/localStorage'
import ContactUs from './ContactUs'
import  Payment  from './Payment'
export const CartContext = createContext();

const App = () => {
  const [cart,setCart]=useState(getCart())
  return (
<BrowserRouter>
<CartContext.Provider value={{cart,setCart}}>
<Header />
<main>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/shop" component={Shop} />
    <Route exact path="/equipment/:id" component={Equipment} />
    <Route exact path='/shipping' component={Shipping} />
    <Route exact path="/cart" component={Cart} />
    <Route exact path="/signin" component={SignIn} />
    <Route exact path="/signup" component={SignUp} />
    <Route exact path="/contact" component={ContactUs} />
    <Route exact path="/admin/dashboard" component={AdminDashboard} />
    <Route exact path="/admin/edit/equipment/:id" component={AdminEditEquipment} />
    <Route exact path="/user/dashboard" component={UserDashboard} />
    <Route exact path="/payment" component={Payment} />
    <Route path="*" component={NotFound} />
  </Switch>
</main>
</CartContext.Provider>

</BrowserRouter>
  )
}

export default App