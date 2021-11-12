import { useState } from "react";

export const useForm = (inialState = {}) => {
    const [formState, setformState] = useState(inialState);

    const haleInputChange = ({target})=> {
        setformState({
            ...formState,
            [target.name] : target.value,
        })
    }
    
    return [formState, haleInputChange]  //puedo retornar un []/ {} o formState
}
