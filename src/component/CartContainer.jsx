import React from 'react';
import { useSelector } from 'react-redux';
import CartComp from './CartComp';
import './CartComp.css';

  const CartContainer = () => {
  const {cartItems, temporaryAmount, qty} = useSelector((store) => store.cart);

  return (
    <div>
       <div className="container">
        <h1>Shopping Cart</h1>
        <div className="row">
            <div className="col-md-8">
            {cartItems.map((item) => {
                return <CartComp key={item.id} {...item}/>
            })}  
            </div>
            <div className="col-6 col-md-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">The total amount of ({qty} item)</h5>
                        <br />
                        <div className="row">
                            <div className="item-total-wrapper">
                                <div className="col col-sm-6">
                                    <ul className='item-total'>
                                        <li><p>Temporary amount</p></li>
                                        <li><p>Fee</p></li>
                                    </ul>
                                </div>
                                <br />
                                <div className="col col-sm-6">
                                    <ul className='item-price'>
                                        <li><p>Rp. {temporaryAmount}</p></li>
                                        <li><p>Rp. 0</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="item-total-wrapper">
                                <div className="col col-sm-6">
                                    <ul className='item-total'>
                                        <li><p><b>The total amount of</b></p></li>
                                    </ul>
                                </div>
                                <br />
                                <div className="col col-sm-6">
                                    <ul className='item-price'>
                                        <li><p><b>Rp. {temporaryAmount}</b></p></li>
                                    </ul>
                                </div>
                            </div>
                        <a href="#" className="btn btn-primary">GO TO CHECKOUT</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="btn-discount dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Add discount code [optional]
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#">MAKANENAK</a></li>
                        <li><a className="dropdown-item" href="#">MAKANPUAS</a></li>
                        <li><a className="dropdown-item" href="#">DISKON1010</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default CartContainer;