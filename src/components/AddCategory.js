import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories } ) => {
    
    const [ inputValue, setInputValue ] = useState('');

    // IT'S FUNCTION TO GET THE VALUE
    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        // funcion callback que sirve para no enviar el valor original del arreglo si no de manera implicita se envia
        if ( inputValue.trim().length > 2 ) {
            setCategories( cat => [  inputValue, ...cat ]);
            setInputValue('');
        }
        
        
        console.log("Done");
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

// VALIDAR VARIABLES
AddCategory.protoTypes={
    setCategories: PropTypes.func.isRequired
}