/* import React, { useState, useEffect } from 'react'; */
/* import { getGifs } from '../helpers/getGifs'; */
import React from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({ category }) => {
    // SE VA A MOVER A UN HOOKS
    /* const [gif, setGif] = useState([]);
    // ejcuta codigo con un argumento de tipo arrar [] como parametro para ejecutarlo segun la peticion y renderizar
    useEffect(() => {
        getGifs( category )
            .then( imgs =>  setGif( imgs ))
    }, [ category ])  */
    
    const { data:images, loading } = useFetchGifs( category );

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>
            
            { loading && <p className="animate__animated animate__flash">'Cargando...'</p>}

            <div className="card-grid">
                {
                    images.map(  img  => (
                        <GifGridItem
                            key={ img.id }
                            {...img} 
                        />
                    ))
                }
            </div>
        </>
    )
}
