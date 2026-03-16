import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increaseQty, decreaseQty } from './Store.jsx/CakeSlice'
import { useNavigate } from 'react-router'

const Cart = () => {

    const CartCake = useSelector(state => state.cake)
    // console.log(CartCake)
    const nav = useNavigate()
    const dispatch = useDispatch()
    const grandTotal = CartCake.reduce((total, item) => {
        return total + (item.price * item.qty)
    }, 0)
    return (
        <div className='container my-5'>
            <p className='abtext my-5'>Your Cart</p>
            <hr />
            <div className='row my-5 ps-4'>
                {CartCake && CartCake.length > 0 ? (
                    CartCake.map(value => (
                        <div className='col-12 col-sm-6 col-lg-4 mb-4' key={value.id}>
                            <img src={value.image} className='img-fluid w-50' alt={value.cake} />
                            <div className='mt-4'>
                                <p className='abtext4'>{value.price}</p>
                                <p className='abtext6'>{value.cake}</p>
                                <p className='abtext4'>INR {value.price} * {value.qty} = INR {value.price * value.qty}</p>
                                <div className="d-flex align-items-center gap-3">
                                    <button className='incdec-btn' onClick={() => dispatch(decreaseQty(value.id))}>-</button>
                                    <span className='abtext4'>{value.qty}</span>
                                    <button className='incdec-btn' onClick={() => dispatch(increaseQty(value.id))}>+</button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className='abtext3'>Empty cart</p>
                )}
            </div><hr />
            <div className='my-5'>
                <p className='abtext3 my-3'>Grand Total</p>
                <p className='abtext3 my-3'>₹ {grandTotal}</p>
                <button className='cart-btn my-3' onClick={() => {
                    nav('/')
                }}>Pay now</button>
            </div>
        </div>
    )
}

export default Cart