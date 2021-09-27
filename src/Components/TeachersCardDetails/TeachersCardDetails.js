import React from 'react';
import './TeachersCardDetails.css';
const TeachersCardDetails = (props) => {
    const teacherData = props.teacherData;
    const { name, phone, email, salary, img,designation } = teacherData;
    const AddTOCart = props.AddTOCart;
    return (
        <div className="col-md-4">
            <div class="card mt-5 cardBg">
                <figure className =" text-center mt-1">
                    <img className="rounded-circle" width="100px" height="100px" src={img} alt="" />
                </figure>
                <div class="card-body">
                    <h6 class="card-title"><span className= "title">Name:</span> {name}</h6>
                    <h6 class="card-title"><span className= "title">Designation:</span> {designation}</h6>
                    <h6 class="card-title"><span className= "title">Email:</span> {email}</h6>
                    <h6 class="card-title"><span className= "title">Phone:</span> {phone}</h6>
                    <h6 class="card-title"><span className= "title">Salary:</span> {salary}</h6>
                </div>
                <div className="d-flex justify-content-center mb-4">
                    <button onClick={() => AddTOCart(teacherData)} className= "btn btn-success "><i class="fas fa-cart-plus"></i> Add Cart</button>
                </div>
                <div className=" d-flex justify-content-around mb-3">
                <i class="fab fa-facebook-square fs-1"></i>
                <i class="fab fa-twitter-square fs-1"></i>
                </div>
            </div>


        </div>
    );
};

export default TeachersCardDetails;