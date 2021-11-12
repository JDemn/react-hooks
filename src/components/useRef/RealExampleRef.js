import React, { useState } from 'react'
import {MultiplesCustumHooks} from '../examples/MultiplesCustumHooks';

export const RealExampleRef = () => {
    //mostrar multiple custom Hook component
    const [show, setshow] = useState(false);
    const sowComponent =()=> {
        setshow(!show);
    }
    return (
        <div>
            <h1>Real Example ref</h1>
            <hr/>
            {
                show && <MultiplesCustumHooks />
            }
            <button className = " btn btn-secondary" onClick = {sowComponent}>Mostrar y ocultar</button>
        </div>
    )
}
