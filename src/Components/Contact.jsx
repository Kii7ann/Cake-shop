import { useFormik } from 'formik'
import React from 'react'
import { Link, useNavigate } from 'react-router'
import * as yup from 'yup'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { toast, ToastContainer } from 'react-toastify';

const Contact = () => {
    const containerStyle = {
        width: "100%",
        height: "400px"
    };

    const center = {
        lat: 23.0225,
        lng: 72.5714
    };

    const Schema = yup.object({
        name: yup
            .string()
            .required("This field is required."),

        email: yup
            .string()
            .email("Invalid email")
            .required("This field is required."),

        massage: yup
            .string()
            .required("This field is required.")
    })

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            massage: ""
        },
        validationSchema: Schema,
        onSubmit: (values, { resetForm }) => {
            toast("Got it!", {
                className: "custom-toast",
                progressClassName: "custom-progress"
            })
            resetForm()
        }
    })
    return (
        <>
            <div className='container mt-5' data-aos="fade-up" data-aos-duration="3000">
                <p className='abtext my-5'>Contact</p><hr />
                <div className='row my-5 align-items-center'>
                    <div className='col-lg-6 col-md-6 col-12'>
                        <p className='abtext3'>Massage Us</p>
                        <p className='abtext2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nobis vel non! Debitis, nulla eaque?</p>
                    </div>
                    <div className='col-lg-6 col-md-6 col-12'>
                        <form className='mt-5 px-5' onSubmit={formik.handleSubmit}>
                            <div className='form-floating'>
                                <input type="text"
                                    id='name'
                                    name='name'
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder='name'
                                    className='form-control' />
                                <label htmlFor="name" className='ftext4'>Your name</label>
                                {formik.touched.name && formik.errors.name && (
                                    <span style={{ color: "palevioletred", fontFamily: "fantasy" }}>
                                        {formik.errors.name}
                                    </span>
                                )}
                            </div>
                            <div className='form-floating mt-3'>
                                <input type="email"
                                    id='email'
                                    name='email'
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder='email@gmail.com'
                                    className='form-control' />
                                <label htmlFor="email" className='ftext4'>Email address</label>
                                {formik.touched.email && formik.errors.email && (
                                    <span style={{ color: "palevioletred", fontFamily: "fantasy" }}>
                                        {formik.errors.email}
                                    </span>
                                )}
                            </div>
                            <div className='form-floating mt-3'>
                                <textarea type="email"
                                    id='massage'
                                    name='massage'
                                    value={formik.values.massage}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder='massage'
                                    className='form-control' />
                                <label htmlFor="massage" className='ftext4'>Massage</label>
                                {formik.touched.massage && formik.errors.massage && (
                                    <span style={{ color: "palevioletred", fontFamily: "fantasy" }}>
                                        {formik.errors.massage}
                                    </span>
                                )}
                            </div>
                            <button type='submit' className='mt-4 context' style={{ width: 100 }}>Send</button>
                        </form>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-lg-3 col-md-6 col-12 mb-4'><hr />
                        <p className='abtext4'>Email</p>
                        <p className='abtext4'>order@example.com</p>
                    </div>
                    <div className='col-lg-3 col-md-6 col-12 mb-4'><hr />
                        <p className='abtext4'>Phone</p>
                        <p className='abtext4'>+91-96******52</p>
                    </div>
                    <div className='col-lg-3 col-md-6 col-12 mb-4'><hr />
                        <p className='abtext4'>Address</p>
                        <p className='abtext4'>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className='col-lg-3 col-md-6 col-12 mb-4'><hr />
                        <p className='abtext4'>Follow Us</p>
                        <div className='icons d-flex gap-4'>
                            <Link to=''><i className="fa-brands fa-facebook lcolor"></i></Link>
                            <Link to=''><i className="fa-brands fa-youtube lcolor"></i></Link>
                            <Link to=''><i className="fa-brands fa-instagram lcolor"></i></Link>
                        </div>
                    </div>
                </div>
                <div className='row my-5'>
                    <div className="col-12">
                        <MapContainer center={[21.270335, 72.814691]} zoom={13} style={{ height: "400px" }}>
                            <TileLayer
                                attribution='© OpenStreetMap'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[21.270335, 72.814691]}>
                                <Popup>Coke shop Location</Popup>
                            </Marker>
                        </MapContainer>
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

export default Contact
