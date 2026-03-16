import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCake } from './Store.jsx/CakeSlice'
import cake from './Cake.json'
import { ToastContainer, toast } from 'react-toastify'

const Cakes = () => {
    const [Cakes, SetCakes] = useState(cake)
    const dispatch = useDispatch()
    const handleAddCart = (value) => {
        dispatch(addCake(value))
        toast(value.cake, {
            className: "custom-toast",
            progressClassName: "custom-progress"
        })
    }
    return (
        <>
            <div className='container mt-5'>
                <p className='abtext d-flex justify-content-center' data-aos="fade-up" data-aos-duration="3000">Our Cakes</p>
                <div className='my-5'>
                    <div className='row my-5 ps-4' data-aos="fade-up" data-aos-duration="3000">
                        {Cakes.map(value => (<div className="col-md-4 mb-4 my-3" key={value.id}>
                            <img src={value.image} />
                            <div className='mt-4'>
                                <p className='abtext4'>INR {value.price}</p>
                                <p className='abtext6'>{value.cake}</p>
                                <p className='abtext5'>{value.cake_description}</p>
                                <button className='cart-btn mt-3' onClick={() => {
                                    handleAddCart(value)
                                }}>Add to cart</button>
                            </div>
                        </div>))}
                    </div>
                </div>
            </div>
            <ToastContainer limit={3} newestOnTop={true} closeOnClick={true}
                toastStyle={{
                    backgroundColor: "pink",
                    color: "palevioletred",
                    fontFamily: "fantasy"
                }}
            />
        </>
    )
}

export default Cakes
