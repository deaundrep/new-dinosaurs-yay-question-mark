const makeDino = function(species, period, carnivore, extinct = false) {
const dino = {
  species: species,
  period: period,
  carnivore: carnivore,
  extinct: extinct,
}
return dino
}



const makeSingular = function(dino) {
const newDino = {
  species: dino.species,
  period: dino.period,
  carnivore: dino.carnivore,
  extinct: dino.extinct,
}
if(newDino.species.endsWith('us') === true){
  newDino.species = newDino.species.slice(0,-2);
}
return newDino
}

const truncateSpecies = function(dino) {
  const newDino = {
    species: dino.species,
    period: dino.period,
    carnivore: dino.carnivore,
    extinct: dino.extinct,
  }
  if(newDino.species.length > 10){
    newDino.species = newDino.species.slice(0,7) + '...'
  }
  return newDino
}

const makeExtinct = function(dino) {
  const newDino = {
    species: dino.species,
    period: dino.period,
    carnivore: dino.carnivore,
    extinct: dino.extinct,
  }
  if(newDino.extinct === false || newDino.extinct === true){
    newDino.extinct = true;
  }
  return newDino
}

module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct
}