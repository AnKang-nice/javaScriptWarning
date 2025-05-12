const MapData = new Map();

MapData.set('name', 'John');
MapData.set('name', 'Allen');

let obj = { a: 1 }

MapData.set(obj, obj);
MapData.set({ a: 1 }, obj);

obj = null  // map强引用  即使为null 也不会被垃圾回收机制回收
/**Map(3) {
  'name' => 'Allen',
  { a: 1 } => { a: 1 },
  { a: 1 } => { a: 1 }
} */

console.log(MapData)


const weakMapData = new WeakMap();
let obj2 = { a: 1 }

weakMapData.set(obj2, obj2);
weakMapData.set({ a: 1 }, obj2);
obj2 = null
// obj2  会被垃圾回收机制回收

console.log(weakMapData);
