import React, { Component } from 'react'
import { Formik } from 'formik'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <Formik
                    initialValues={{
                        firstname:'',
                        lastname:'',
                        email:'',
                        telnum:'',
                        message:''
                    }}
                    onSubmit={
                        (values)=>{
                            console.log(values)
                        }
                    }
                    validate={
                        (values)=>{
                            const errors={}
                            if(!values.firstname){
                                errors.firstname='required'
                            }
                            if(!values.lastname){
                                errors.lastname='required'
                            }
                            if(!values.email){
                                errors.email='required'
                            }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
                                errors.email="Invalid email"
                            }
                            if(!values.telnum){
                                errors.telnum='required'
                            }else if(values.telnum.length<11){
                                errors.telnum='Number must be 11 digit'
                            }
                            if(!values.message){
                                errors.message='required'
                            }
                            return errors
                        }
                    }
                    
                >
                    {({values,handleChange,handleSubmit,errors})=>(
                        <div className='container' style={{border:'1px solid grey',padding:'15px',borderRadius:'7px', marginTop:'50px'}}>
                            <form onSubmit={handleSubmit}>
                                <input 
                                    name='firstname'
                                    placeholder='Enter ur first name'
                                    className='form-control'
                                    value={values.firstname}
                                    onChange={handleChange}
                                />
                                <span style={{color:'red'}}>{errors.firstname}</span>
                                <br/>
                                <input 
                                    name='lastname'
                                    placeholder='Enter ur last name'
                                    className='form-control'
                                    value={values.lastname}
                                    onChange={handleChange}
                                />
                                <span style={{color:'red'}}>{errors.lastname}</span>
                                <br/>
                                <input 
                                    name='email'
                                    placeholder='Enter ur email'
                                    className='form-control'
                                    value={values.email}
                                    onChange={handleChange}
                                />
                                <span style={{color:'red'}}>{errors.email}</span>
                                <br/>
                                <input 
                                    name='telnum'
                                    placeholder='Enter ur mobile number'
                                    className='form-control'
                                    value={values.telnum}
                                    onChange={handleChange}
                                />
                                <span style={{color:'red'}}>{errors.telnum}</span>
                                <br/>
                                <textarea 
                                    name='message'
                                    placeholder='Enter ur message'
                                    className='form-control'
                                    value={values.message}
                                    onChange={handleChange}
                                />
                                <span style={{color:'red'}}>{errors.message}</span>
                                <br/>
                                <button type='submit' className='btn btn-success'>Submit</button>
                            </form>
                        </div>
                    )}
                </Formik>
            </div>
        )
    }
}

