import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';
import { getGif } from '../helpers/getGif';
import { useFetchGif } from '../hooks/useFetchGif';


export const GifGrid=({category})=>{

    const [images, setImages] = useState([]);

    const {data,loading}= useFetchGif(category);


    
    // useEffect( ()=>{
    //     getGif(category)
    //     .then( setImages)
    // },[])

    // const getGif=async()=>{
    //     const url=`https://api.giphy.com/v1/gifs/search?api_key=q502okE6E9wzi7lPDorARwhOnAq4Mgfw&q=${encodeURI(category)}&limit=25&offset=0&rating=g&lang=en`

    //     const resp=await fetch(url);
    //     const {data}=await resp.json();
    //     const gifs = data.map( img => {
    //         return {
    //             id: img.id,
    //             title: img.title,
    //             url: img.images.downsized_medium.url
    //         }
    //     })

    // return gifs;

    // }
    // getGif()
    //     .then( (imgs)=> setImages(imgs)

    //     )
    return(
        <>
            <h3> {category} </h3>
            {loading && <span class="loader"></span> }
            <div className='card-grid'>
                                {
                    data.map((img) =>
                        <GifGridItem
                                    key={img.id}
                                    {...img}/>
                    )
                }
                
            </div>
        </>

    )
}