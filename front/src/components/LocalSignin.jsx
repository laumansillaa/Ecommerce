import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import { localSignIn } from "../actions/index";


export default function LocalSignin() {
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        email: '',
        password: ''
    })

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }

    function handleSubmit(){
        dispatch(localSignIn(input))
        alert('Lognin exitoso')
        setInput({
            email: '',
            password: ''
        })
    }


    return (
        <div>
            <div>
                <div>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div>
                            <label>Email: </label>
                            <input type= 'input' value={input.email} name='email' onChange={(e) => handleChange(e)} />
                        </div>
                        <div>
                            <label>Password: </label>
                            <input type='input' value={input.password} name='password' onChange={(e) => handleChange(e)}/>
                        </div>
                        <button type="submit" >Ingresar!</button>
                    </form>
                </div>
                <div>
                    <button><Link to='/signUp'>No tengo una cuenta!</Link></button>
                </div>
            </div>
        </div>
    )





}
