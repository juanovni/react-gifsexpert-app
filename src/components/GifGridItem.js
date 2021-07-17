import React from 'react';

export const GifGridItem = ( { id, title, image } ) => {
    return (
        <div className="card animate__animated animate__fadeIn animate__delay-1s">
            <img src={ image } alt={ title }></img>
            <p>{ title} </p>
        </div>
    )
}
