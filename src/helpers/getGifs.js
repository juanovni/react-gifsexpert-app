

export const getGifs = async( category ) => {
        const url  = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=10&api_key=JPZ4ymIWI23849USvXGYaoaxk5zfZuv4`;
        const resp = await fetch( url );
        const { data } = await resp.json();
        
        const gif = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                image: img.images?.downsized_large.url
            }
        }) 
        
        
        return( gif );

    }