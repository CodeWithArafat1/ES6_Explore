const map = new Map([
  ["a", 20],
  ["b", 10],
]);

map.set("c", 40);
map.set({name: 'arafat'},49)

// map.delete('a')

// console.log(map);
// console.log(map.size);
// console.log(map.clear());
// console.log(map.get('a'))
// console.log(map.values())
// console.log(map.keys())
// console.log(map.entries())

for(let [k, v] of map){
    console.log(k, v)
}

map.forEach((value, key) => {
  console.log(value, key);
});
