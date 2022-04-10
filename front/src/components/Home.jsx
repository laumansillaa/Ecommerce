import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getAllPost } from "../actions/index";
//import {Link} from 'react-router-dom';
import Card from './Card';
import Paginado from './Paginado'; 


export default function Home () {

    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts);
    console.log('SOY POSTS', posts)

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(5);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    useEffect(() => {
        dispatch(getAllPost());
    }, [dispatch]);

    







    return (

        <div>
            <h1>Estamos en home</h1>
            <div>
                <h3>Este va a ser el nav var</h3>
                <button>PERFIL</button>
                <button>ABOUT</button>
                <button>DONACIONES</button>
            </div>
            <div>
                <h3>
                    ACA VAN LOS FILTROS
                </h3>
                <h3> ------------------ </h3>
            </div>
            <div>
                <a>HOLA PAGINADO</a>
                <Paginado postsPerPage={postsPerPage}
                posts={posts.length}
                paginado={paginado}
                />
            </div>
            <div>
                {
                    currentPosts?.map(post => {
                        return (
                            <div>
                                
                                    <Card key={post.id} posts={post}/>                                
                                
                            </div>
                        )                    
                    })
                }
            </div>
        </div>

    )
}