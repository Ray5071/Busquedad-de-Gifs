

export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Tbherv4t64cusjUk9Op6TDJ4cPqQ5tBv&q=${category}&limit=5`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    //console.log(data);
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    // console.log(gifs);
    return gifs;
}