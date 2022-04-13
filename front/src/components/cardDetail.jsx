import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostDetail } from "../actions/index";



export default function Detail (){
    const {id} = useParams();
    console.log("SOY PARAMS", id)

    const dispatch = useDispatch();

    const post = useSelector((state) => state.detail);
    //console.log('SOY POSTS ID', post[0].id)

    useEffect(() => {
        dispatch(getPostDetail(id));
    }, [dispatch]);

    return (
        <div>
            {
                post?
                <div>
                    <div>
                        <div>
                            <h2>{post.name}</h2>
                        </div>
                        <div>
                            <img src={post.images}/>
                        </div>
                        <div>
                            <h5>{post.race}</h5>
                        </div>
                        <div>
                            <h5>Edad: {post.age}</h5>
                        </div>
                        <div>
                            <h5>Tamaño: {post.size}</h5>
                        </div>
                        <div>
                            <h5>Estado: {post.status}</h5>
                        </div>
                        <div>
                            <h5>Observaciones: {post.observations}</h5>
                        </div>
                    </div>
                </div> : <p>Cargando...</p>
            }


        </div>

    )

}