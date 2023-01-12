import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import { getNewArrivals, getServices } from "../api/filter";
import { getEquipments } from "../api/equipment";
import { getLocalStorage } from "./helpers/localStorage";
import { getCategories,getCategory } from "../api/category";
import ContactUs from "./ContactUs";

const Home = () => {
  // const [newArrivals, setNewArrivals] = useState([]);
  // const [categoryIds, setCategoryIds] = useState([]);
  const [equipments, setEquipments] = useState([]);
  const [categories,setCategories]=useState([]);
  const [services,setServices]=useState([]);
  
  useEffect(() => {
    // getNewArrivals().then((res) => setNewArrivals(res.data.newArrivals));
	  getEquipments().then((res)=>setEquipments(res.data.equipments))
    getCategories().then((res)=>setCategories(res.data.categories))
    getServices().then((res)=>setServices(res.data));
  

  }, []);

  

 
  return (
    <section className="home-page">
      <div className="banner-image bs1"></div>

      <div className="container">
        {/* <hr className='py-4' /> */}
        <h3 className="py-4">Our Services</h3>
        <div className="row g-3">
          {/* {newArrivals &&
            newArrivals.map((newArrival) => (
              <Card
                key={newArrival._id}
                equipment={newArrival}
                homePage={true}
              />
            ))} */}
{services&&services.map((service)=><div className="col-sm-4 my-4 bs3 card bs2 ">
  <img src={`/uploads/${service.fileName}`} className="img-fluid mx-auto my-auto" alt={categories.filter(el=>el._id===service.equipmentCategory)[0].category} />
 <h5 className="text-capitalize text-center py-2">{categories.filter(el=>el._id===service.equipmentCategory)[0].category} Service</h5>
</div>)}
            
        </div>


		<h3 className="py-4">Our Equipments</h3>
        <div className="row">
          
          {equipments &&
            equipments.map((equipment) => (
              <Card
                key={equipment._id}
                equipment={equipment}
                homePage={true}
              />
            ))}
        </div>
      </div>
      <ContactUs />
  
    </section>
  );
};

export default Home;
