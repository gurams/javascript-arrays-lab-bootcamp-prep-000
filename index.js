const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name){
  return kittens.push(name)
}
function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}
function destructivelyRemoveLastKitten(){
  return kittens.pop()
}
function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}
function appendKitten(name){
  return [...kittens,name]
}
function prependKitten(name){
  return [name,...kittens]
}
function removeLastKitten(){
  var newAr= kittens.slice(0,kittens(-1))
  return newAr
}
function removeFirstKitten(){
  return kittens.slice(1)
}
