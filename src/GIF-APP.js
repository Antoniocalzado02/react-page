import React, { useState } from "react";
import PropTypes from 'prop-types'
import { AddCategory} from "./component/AddCategory";
import { GifGrid } from "./component/GifGrid";
// const PrimeraApi =()=>{   Este ejemplo con fragment
//     return (
//         <Fragment>
//             <h1>Hola mundo</h1>
//             <h2>Subtitulo</h2>
//         </Fragment>
    
//     )
// }

const GifCounterApp =({})=>{
    // const categories=['Yamaha','Kawasaki','Ducati','Ferrari']

    const [element, setElement]=useState(['Yamaha','Kawasaki','Ducati','Ferrari']);
    console.log(element);
    const addElement=()=>{
        element.push('Yamaha')
        setElement([...element])
    }

    // const deleteElement=()=>{
    //     element.splice(0,1)
    //     setElement([...element])
    // }

    // const deleteUltElement=()=>{
    //     element.pop()
    //     setElement([...element])
    // }


    return (
        <>
            <h2>Gif-Apps</h2>
            <hr />
            <AddCategory setElement={setElement}/>
            
                {
                    element.map((category)=>                    
                        <GifGrid key={category} category={category}/>
                    )


                }


            
            {/* <button onClick={addElement}>Añadir elemento</button>
            <button onClick={deleteElement}>Eliminar el 1 elemento</button>
            <button onClick={deleteUltElement}>Eliminar el ultimo elemento</button> */}
        </>
    
    )
}



export default GifCounterApp;