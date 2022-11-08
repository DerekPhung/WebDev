
async function pokeAPI(){
  let name = document.getElementById("search").value.toLowerCase();
  let host = `https://pokeapi.co/api/v2/pokemon/${name}`;
  let response = await fetch(host);
  let data = await response.json();
  display(data);
}


function display(allData){
  let name = (allData.name);
  let pokedex = (allData.id);
  let type = (allTypes(allData.types));
  let image = (allData.sprites.other.home.front_default);


  document.getElementById("name").innerHTML = "Name: " + formatName(name);
  document.getElementById("pokedex").innerHTML = "Pokedex: " + pokedex;
  document.getElementById("type").innerHTML = "Type: " + type;
  document.getElementById("picContainer").innerHTML = `<img src="${image}" >`;

}

function formatName(name){
  return name.charAt(0).toUpperCase() + name.slice(1);
}

function allTypes(allTypes){
  if(allTypes.length < 2){
    return allTypes[0].type.name;
  }

  else{
    return allTypes[0].type.name + ", " + allTypes[1].type.name;
  }
}

//event listener
function enter(e) {
  console.log(event.key,"something");
  if(event.key === "Enter") {
    pokeAPI();
  }
}