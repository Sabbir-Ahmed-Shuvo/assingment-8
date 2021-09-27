import React, { useState } from 'react';
import FakeData from '../../fakeData/fakedata'
import Cart from '../Cart/Cart';
import TeachersCardDetails from '../TeachersCardDetails/TeachersCardDetails';
import './TeachersCard.css'

const TeachersCard = () => {
    const [cartData, setCartData] = useState([]);

    const AddTOCart = (data) => {
        const newCart = [...cartData, data]
        setCartData(newCart)

    }
    return (
        <div className='container-fluid'>
            <div className="row Teacher-bg">
                <div className="col-md-8 ">
                    <div className="row">
                        {
                            FakeData.map(dt => <TeachersCardDetails key={dt.id} teacherData={dt} AddTOCart={AddTOCart}></TeachersCardDetails>)
                        }
                    </div>
                </div>
                <div className="col-md-4">
                    <Cart cartData={cartData}></Cart>
                </div>
            </div>
        </div>
    );
};

export default TeachersCard;