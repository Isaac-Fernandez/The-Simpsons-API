function personajes(){
    fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(response => response.json())
    .then(personajes => {
        const contenedor = document.querySelector('#personajes')
        
        for(let i=0; i<personajes.length; i++){
            contenedor.innerHTML = `<div class="col-sm-3">
            <div class="card">
            <h5 class="card-title">${personajes[i].character}</h5>
                <img src="${personajes[i].image}" class="imagen" alt="...">
                <div class="card-body"> 
                    <p  class="frase">Famous Phrase</p>
                    <p class="card-text">${personajes[i].quote}</p>
                    <a href="#" class="btn btn-primary" onClick="personajes()">Next Character</a>
                </div>
            </div>
        </div>`
        }
        console.log(personajes)
    })
}

personajes()