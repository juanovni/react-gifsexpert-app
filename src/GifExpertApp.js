import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    //const categories = ['Goky', 'Simpsons', 'Naruto'];
    const [ categories, setCategories ] = useState(['One Punch']);

    /* const handleAddCategory = () => {
        // FIRT FORM
        //setCategories( [ 'Two and hald men', ...categories,]);
        // SECOND WITH A CALLBACK FUNCTION
        setCategories( cat => [ ...cat , 'Prueba']);
    } */


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />
            {/* <button onClick={ handleAddCategory }>Add Category</button> */}

            <ol>
               { 
                categories.map( ( category ) => (
                    <GifGrid 
                        key={ category }
                        category={ category } 
                    />
                ))
            } 
            </ol>
        </>
    )
}


export default GifExpertApp;