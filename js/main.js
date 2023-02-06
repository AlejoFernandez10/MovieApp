
let buscarBtn = document.getElementById(`buscar-btn`)
let buscarBarra = document.getElementById(`buscarBarra`)



buscarBtn.addEventListener(`click`,(e)=>{
    e.preventDefault()
})



window.addEventListener(`load`, () =>{

    function buscarPelicula (){

        const nombrePelicula = buscarBarra.value;
        
        if(nombrePelicula.length > 0){
            fetch(`http://www.omdbapi.com/?s=${nombrePelicula}&apikey=46c5cb96`)
            .then(response => response.json())
            .then((data) => console.log(data));
        }else{
            alert(`Por favor ingrese el nombre de una pelicula`)
        }
    }

    buscarBtn.addEventListener(`click`, ()=>{
        buscarPelicula();
    }) 

    

})

