import { useState } from "react"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Button(){

    const [ subscribe, setSubscribe] = useState(false)

    return (
        <button
        onClick={() => {
            toast.success(`${ !subscribe ? "Te has suscrito" : "No estas suscrito"}`)
         setSubscribe(!subscribe)
        }}
        >
           { subscribe  ? "ya estas Suscrito !" : "Suscribete !" }
        </button>
    )
}

export default Button


