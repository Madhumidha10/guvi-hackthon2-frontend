import React, { Fragment, useState, useEffect } from "react";
import isEmpty from "validator/lib/isEmpty";
import { createCategory, getCategories } from "../api/category";
import { createEquipment, getEquipments } from "../api/equipment";
import Card from "./Card";
import { showLoading } from "./helpers/loading";
import { showErrorMessage, showSuccessMessage } from "./helpers/message";
import { Link} from 'react-router-dom';

import { deleteEquipment } from '../api/equipment';
const AdminDashboard = () => {
  const [category, setCategory] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setsuccessMsg] = useState("");
  const [loading, setLoading] = useState("");
  const [categories, setCategories] = useState(null);
  const [equipments,setEquipments]=useState([])
  const [equipmentData, setEquipmentData] = useState({
    equipmentImage: null,
    equipmentName: "",
    equipmentDesc: "",
    equipmentPrice: "",
    equipmentCategory: "",
    equipmentQty: "",
  });

  const {
    equipmentImage,
    equipmentName,
    equipmentDesc,
    equipmentPrice,
    equipmentCategory,
    equipmentQty,
  } = equipmentData;


  const loadCategories = async () => {
    await getCategories()
      .then((res) => {
        console.log(res)
        setCategories(res.data.categories);
      })
  };

  const loadEquipments = async () => {
    await getEquipments()
      .then((res) => {
    
        setEquipments(res.data.equipments);
      })
  };

  useEffect(() => {
    loadCategories();
    loadEquipments();
  }, []);
  const handleEquipmentImage = (e) => {
    console.log(e.target.files[0]);
    setEquipmentData({
      ...equipmentData,
      [e.target.name]: e.target.files[0],
    });
  };

  const handleEquipmentChange = (e) => {
    setErrMsg("");
    setsuccessMsg("");
    setEquipmentData({ ...equipmentData, [e.target.name]: e.target.value });
  };
  const handleEquipmentSubmit = (e) => {
    e.preventDefault();
    if (equipmentImage === null) {
      setErrMsg("Please select an image");
    } else if (
      isEmpty(equipmentName) ||
      isEmpty(equipmentDesc) ||
      isEmpty(equipmentPrice)
    ) {
      setErrMsg("Please enter all fields");
    } else if (isEmpty(equipmentCategory)) {
      setErrMsg("Please select a category");
    } else if (isEmpty(equipmentQty)) {
      setErrMsg("Please select a quantity");
    } else {
      let formData = new FormData();
      formData.append("equipmentImage", equipmentImage);
      formData.append("equipmentName", equipmentName);
      formData.append("equipmentDesc", equipmentDesc);
      formData.append("equipmentPrice", equipmentPrice);
      formData.append("equipmentCategory", equipmentCategory);
      formData.append("equipmentQty", equipmentQty);
      createEquipment(formData)
        .then((res) => {
          
         setEquipmentData({equipmentImage:null,equipmentName:'',equipmentDesc:'',equipmentPrice:'',equipmentCategory:'',equipmentQty:''})
        setsuccessMsg(res.data.successMessage)
        loadEquipments()
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
 

  const handleMessages = (e) => {
    setErrMsg("");
    setsuccessMsg("");
   

  };
  const handleCategoryChange = (e) => {
    setErrMsg("");
    setsuccessMsg("");
    setCategory(e.target.value);
  };
  const handleCategorySubmit = (e) => {
    e.preventDefault();
    if (isEmpty(category)) {
      setErrMsg("Please enter a category");
    } else {
      const data = { category };
      setLoading(true);
      createCategory(data)
        .then((res) => {
          setLoading(false);
          setsuccessMsg(res.data.successMessage);
        })
        .catch((err) => {
          setLoading(false);
          setErrMsg(err.response.data.errorMessage);
        });
    }
  };

  const showHeader = (
  
    <div className="bg-dark text-white py-4">
      <div className="container row">
        <div className="col-md-6">
          {/* <p className="h1"> */}
            <i className="fa-solid fa-house"> Dashboard</i>
          {/* </p> */}
        </div>
      </div>
    </div>

    
  );
  const showActionBtns = (
    <div className="bg-light my-2">
      <div className="container">
        <div className="row">
          <div className="col-md-4 my-1 d-grid gap-2">
            <button
              className="btn btn-outline-info "
              data-bs-toggle="modal"
              href="#addCategoryModal"
            >
              <i className="fa-solid fa-plus">Add Category</i>
            </button>
          </div>

          <div className="col-md-4 my-1 d-grid gap-2">
            <button
              className="btn btn-outline-warning "
              data-bs-toggle="modal"
              href="#addEquipmentModal"
            >
              <i className="fa-solid fa-plus">Add Equipment</i>
            </button>
          </div>

          <div className="col-md-4 my-1 d-grid gap-2">
            <button
              className="btn btn-outline-success"
              data-bs-toggle="modal"
              href="#viewOrdersModal"
            >
              <i className="fa-solid fa-money-check-dollar">View Orders</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const showEquipmentModal = (
    <div id="addEquipmentModal" className="modal" onClick={handleMessages}>
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <form onSubmit={handleEquipmentSubmit}>
            <div className="modal-header bg-warning text-white">
              <h5 className="modal-title ">Add Equipment</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {errMsg && showErrorMessage(errMsg)}
              {successMsg && showSuccessMessage(successMsg)}
              {loading ? (
                <div className="text-center">{showLoading()}</div>
              ) : (
                <Fragment>
                  {/* <div className="mb-3">
                    <input
                      type="file"
                      className="form-control"
                      name="equipmentImage"
                      onChange={handleEquipmentImage}
                   
                    />
                  </div> */}
<div className=' mb-2'>
										<input
											type='file'
											className='custom-file-input'
											name='equipmentImage'
											onChange={handleEquipmentImage}
                      
										/>
										{/* <label className='custom-file-label'>
											Choose File
										</label> */}
									</div>
                  <div className="form-group">
                    <label className="text-secondary">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="equipmentName"
                      value={equipmentName}
                      onChange={handleEquipmentChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="text-secondary">Description</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      name="equipmentDesc"
                      value={equipmentDesc}
                      onChange={handleEquipmentChange}
                    ></textarea>
                  </div>

                  <div className="form-group">
                    <label className="text-secondary">Price</label>
                    <input
                      type="text"
                      className="form-control"
                      name="equipmentPrice"
                      value={equipmentPrice}
                      onChange={handleEquipmentChange}
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label className="text-secondary">Category</label>
                      <select
                        className="custom-select mr-sm-2"
                        name="equipmentCategory"
                        onChange={handleEquipmentChange}
                        
                      >
                        <option value="">Choose one...</option>

                        {categories &&
                          categories.map((c) => (
                            <option key={c._id} value={c._id}>
                              {c.category}
                            </option>
                          ))}
                      </select>
                    </div>

                    <div className="form-group col-md-6">
                      <label className="text-secondary">Quantity</label>
                      <input
                        type="number"
                        className="form-control"
                        min="0"
                        max="1000"
                        name="equipmentQty"
                        value={equipmentQty}
                        onChange={handleEquipmentChange}
                      />
                    </div>
                  </div>
                </Fragment>
              )}
            </div>
            <div className="modal-footer">
              <button className="btn btn-warning" type="submit">
                Submit
              </button>
              <button className=" btn btn-dark" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  const showCategoryModal = (
    <div id="addCategoryModal" className="modal" onClick={handleMessages}>
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <form onSubmit={handleCategorySubmit}>
            <div className="modal-header bg-info text-white">
              <h5 className="modal-title ">Add Category</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {errMsg && showErrorMessage(errMsg)}
              {successMsg && showSuccessMessage(successMsg)}
              {loading ? (
                <div className="text-center">{showLoading()}</div>
              ) : (
                <Fragment>
                  <label className="text-secondary">Category</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={handleCategoryChange}
                  />
                </Fragment>
              )}
            </div>
            <div className="modal-footer">
              <button className="btn btn-info" type="submit">
                Submit
              </button>
              <button className=" btn btn-dark" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  const showBody=(<div className='container'>
  <div className='row'>
    <div className='card-group '>
      {equipments &&
        equipments.map(equipment => (
  
          <Card
            key={equipment._id}
            equipment={equipment}
            deleteButton={<button
              type='button'
              className='btn btn-danger btn-sm'
               onClick={() =>{deleteEquipment(equipment._id).then((res)=>loadEquipments())}
              
               }
            >
              <i className='far fa-trash-alt pr-1'></i>
              Delete
            </button>}
             adminPage={true}
          />
        ))}
    </div>
  </div>
</div>) 
  return (

      <section>
        {showHeader}
        {showActionBtns}
        {showCategoryModal}
        {showEquipmentModal}
        {showBody}
      </section>

  );
};

export default AdminDashboard;
