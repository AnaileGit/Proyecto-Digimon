const main = document.getElementById('main')
const url = 'https://digimon-api.vercel.app/api/digimon';

fetch(url)
  .then(resp => resp.json())
  .then(data => mostrarDigimon(data))
  .catch(err => console.log(err))


const mostrarDigimon = (arr) => {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    const nombre = arr[i].name;
    const nivel = arr[i].level;
    const imagen = arr[i].img;
    str = str +
      `<div class="tarjeta">
      <figure class="container-img">
          <img src= "${imagen}" alt="${nombre}" width="131px" height="142">
      </figure>
         <div class="info">
          <p class="tipo">${nombre}</p>
          <p class="tipo-2">${nivel}</p>
         </div>
  </div>`  
    }
    main.innerHTML = str;
 }