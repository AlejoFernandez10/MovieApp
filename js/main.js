

async function cargarPeliculas(buscarPelicula){

    const apikey = `46c5cb96`;
    const url = `http://www.omdbapi.com/?s=${buscarPelicula}&apikey=${apikey}`;

    /* const respuesta = await fetch(`${url}`);
    const datos = await respuesta.json(); */
    
    const respuesta = await fetch(` ${url}`);
    const datos = await respuesta.json();
    console.log(datos)


}

cargarPeliculas(`spiderman`)