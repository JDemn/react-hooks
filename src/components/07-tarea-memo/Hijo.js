import React from 'react'
import './hijo.css';
export const Hijo = React.memo(({ numero, incrementar }) => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="btn btn-primary ml-4"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
});
