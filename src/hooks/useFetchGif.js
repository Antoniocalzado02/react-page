import { useEffect, useState } from "react"
import { getGif } from "../helpers/getGif";

export const useFetchGif=(category)=>{
    const[state,setState] =useState({
        data: [],
        loading: true
    });

    useEffect(()=>{
        getGif(category).then((gifs)=>{
            setTimeout( ()=> {
                setState({
                    data: gifs,
                    loading: false
                })
            }, 3000)
        })
    }, [category])

    

    return state;
}