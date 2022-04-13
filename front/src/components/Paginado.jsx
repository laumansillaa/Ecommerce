import React from 'react';

export default function Paginado ({postsPerPage, posts, paginado}) {
    const pageNumber = [];    

    for (let i = 1; i <= Math.ceil(posts / postsPerPage); i++) {
        pageNumber.push(i);
    }

    return (
        <div>
            {
                pageNumber && 
                pageNumber.map(number => {
                    return (
                        <a key={number}>
                            <button onClick={() => paginado(number)} >{number}</button>
                        </a>
                    )
                })
            }
            
        </div>
    )
}