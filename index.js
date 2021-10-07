
function getPechaBerry(event){
event.preventDefault();
axios.get('https://pokeapi.co/api/v2/berry/pecha/')
.then(res =>{
   console.log(res.data);
})}


const pechaBerryBtn = document.querySelector('#pecha-button');
pechaBerryBtn.addEventListener('click',getPechaBerry);
