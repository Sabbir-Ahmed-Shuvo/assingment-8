import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cartData = props.cartData;

    const totalSalary = cartData.reduce(( total, iteam ) => total + iteam.salary ,0)

    return (
        <div className= "mt-5 cartBg">
            <h2>Teacher Added: {cartData.length}</h2>
            {
                cartData.map(dt => (
                    <div>
                        <div className="d-flex justify-content-around">
                            <h6>Name: {dt.name}</h6>
                            <img height="50px" src={dt.img} alt="" />
                        </div>
                        <h6 className ="ms-4">Salary: {dt.salary}</h6>
                    </div>
                ))
            }

            <h1>Total Salary : {totalSalary} </h1>
        </div>
    );
};

export default Cart;