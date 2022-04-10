import React from "react";
// import { getAllPosts } from "../../actions";
// import { Link } from "react-router-dom";



export default function Card ({posts}){
    console.log('CARDS POSTS ', posts)

    return (
        <div className="card">
            <div className="card-header">
                <h3>{posts.name}</h3>
            </div>
            <div className="card-body">
                <img src= {posts.images} alt="img not found" className="imgcard"/>
            </div>
            <div>
                <h2>{posts.race}</h2>
            </div>
            <div>
                <h2>LINK VER MAS</h2>
            </div>


        </div>        
    )


}