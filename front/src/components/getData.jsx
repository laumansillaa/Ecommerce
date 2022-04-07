import React, {useState, useEffect} from 'react';
import { getData } from '../actions/index';
import {useDispatch, useSelector} from 'react-redux';
import { Link, useParams} from 'react-router-dom';



export default function userGetData () {
    const {id} = useParams()
    const dispatch = useDispatch()

    const detailUser = useSelector((state) => state.detail)
    console.log('DETAIL USER', detailUser)

    useEffect(() => {
        dispatch(getData(id))
    }, [dispatch])


    return (

        <div>
            {
                detailUser ?
                <div>
                    <div>

                    </div>
                </div> : 
                <div>Loading...</div>
            } 


        </div>



    )



}