import React, {useState, useEffect} from 'react';
//import {Link} from 'react-router-dom';
import {signUpUser } from '../actions/index';
import {useDispatch, useSelector} from 'react-redux';

//import axios from 'axios';

//Form controlado




export default function CreateUser() {
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        password: ''        
    })

    // useEffect(() => {
    //     dispatch(signUpUser())
    // }, [dispatch])



    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }


    function handleSubmit(){
        dispatch(signUpUser(input))
        alert('Usuario creado')
        setInput({
            firstname: '',
            lastname: '',
            phone: '',
            email: '',
            password: ''  
        })
    }


    return (
        <div>
            <div>
                <div>
                    <h2>Ingrese sus datos</h2>
                </div>
                <form onSubmit={(e) => handleSubmit(e)} >
                    <div>
                        <label>Firstname: </label>
                        <input type='text' value={input.firstname} name= 'firstname' onChange={(e) => handleChange(e)} />
                        {/* CONTROL DE ERRORES */}

                    </div>
                    <div>
                        <label>Lastname: </label>
                        <input type='text' value={input.lastname} name='lastname' onChange={(e) => handleChange(e)}/>
                    </div>
                    <div>
                        <label>Phone: </label>
                        <input type='text' value={input.phone} name='phone' onChange={(e) => handleChange(e)}/>
                    </div>
                    <div>
                        <label>Email: </label>
                        <input type='input' value={input.email} name='email' onChange={(e) => handleChange(e)}/>
                    </div>
                    <div>
                        <label>Password: </label>
                        <input type='input' value={input.password} name='password' onChange={(e) => handleChange(e)}/>
                    </div>
                    <button type='submit' >Crear usuario!</button>
                </form>
            </div>
        </div>
    )










}