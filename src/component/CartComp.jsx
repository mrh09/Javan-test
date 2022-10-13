import { React, useState } from 'react';
import './CartComp.css'
import { BsTrashFill } from 'react-icons/bs';
import { GiEternalLove } from 'react-icons/gi';
import { removeItem, increase, decrease } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux/es/exports';

    const CartComp = ({id, name, category, code, image, qty, price}) => {
    const dispatch = useDispatch();
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click)
    }

    return (
    <div className="card">
        <div className="item-card-body card-body">
            <div className="row">
                <div className="col-md-auto">
                    <img src={"img/" + image} alt={name} />
                </div>
                <div className="col col-sm-4">
                    <ul className='item-desc'>
                        <li><h4>{name}</h4></li>
                        <br />
                        <li className='mt-2'><p><b>Code :</b> {code}</p></li>
                        <li><p><b>Category :</b> {category}</p></li>
                        <li>
                            <ul className='item-act'>
                                <li><p 
                                        className='remove-item' 
                                        onClick={() => {
                                            dispatch(removeItem( id ));
                                        }}>
                                            <BsTrashFill /> Remove Item
                                    </p></li>
                                <li><p 
                                    className='like-text'
                                    onClick={() => {
                                    alert("Berhasil Di Tambahkan di Daftar Favorit")
                                }}><GiEternalLove /> Move To Wish List</p></li>    
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="col col-sm-3">
                <div className="item-sub">
                    <button 
                        className='btn btn-light' 
                        onClick={() => {
                            if (qty === 1) {
                                dispatch(removeItem( id ));
                                return;
                            }
                            dispatch(decrease({ id }));
                        }}>
                            -
                        </button>
                    <p className='form-control'>{qty} </p>
                    <button 
                        className='btn btn-light'
                        onClick={() => {
                            dispatch(increase({ id }));
                        }}>
                            +
                        </button>
                </div>
                <br />
                    <p className='text-price'><b>Rp. {price}</b></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartComp