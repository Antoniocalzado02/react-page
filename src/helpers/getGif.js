export const getGif = async (category)=>{
   
        const url=`https://api.giphy.com/v1/gifs/search?api_key=q502okE6E9wzi7lPDorARwhOnAq4Mgfw&q=${encodeURI(category)}&limit=25&offset=0&rating=g&lang=en`

        const resp=await fetch(url);
        const {data}=await resp.json();
        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        })

    return gifs;

    
}