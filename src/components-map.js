let map = new Map();

export default {
  set(key, value) {
    if (map.has(key)) {
      console.error(`${key} already exists in components map`)
    }
    return map.set(key, value)
  },
  get(key){
    if(!map.get(key)) {
      console.error(`${key} or component not found in components map`)
    }
    return map.get(key)
  }
}
